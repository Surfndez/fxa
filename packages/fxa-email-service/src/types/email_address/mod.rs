// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, you can obtain one at https://mozilla.org/MPL/2.0/.

//! Email address type.

use std::{
    fmt::{self, Display, Formatter},
    str::FromStr,
};

use serde::de::{value::Error as DeserializeError, Deserialize, Deserializer, Error, Unexpected};

use super::validate;

#[cfg(test)]
mod test;

/// Email address type.
///
/// Validates and then lowercases the address during parsing.
#[derive(Clone, Debug, Default, Eq, Serialize, PartialEq)]
pub struct EmailAddress(String);

impl AsRef<str> for EmailAddress {
    fn as_ref(&self) -> &str {
        self.0.as_str()
    }
}

impl<'d> Deserialize<'d> for EmailAddress {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'d>,
    {
        let value: String = Deserialize::deserialize(deserializer)?;
        value.parse().map_err(D::Error::custom)
    }
}

impl Display for EmailAddress {
    fn fmt(&self, formatter: &mut Formatter) -> fmt::Result {
        write!(formatter, "{}", self.0)
    }
}

impl FromStr for EmailAddress {
    type Err = DeserializeError;

    fn from_str(value: &str) -> Result<Self, Self::Err> {
        let mut value = value;

        if let Some(opening_index) = value.find('<') {
            if let Some(closing_index) = value.rfind('>') {
                if opening_index < closing_index {
                    if let Some(unwrapped_value) = value.get(opening_index + 1..closing_index) {
                        value = unwrapped_value;
                    }
                }
            }
        }

        value = value.trim();

        if validate::email_address(value) {
            Ok(EmailAddress(value.to_lowercase()))
        } else {
            Err(DeserializeError::invalid_value(
                Unexpected::Str(value),
                &"email address",
            ))
        }
    }
}
