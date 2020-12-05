const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  if (email === "") {
    return false;
  }
  return /^([\w.-]+)@([\w-]+)((\.(\w){2,})+)$/.test(email);
};

// should return false for an empty string
// should return false if there is no @
// should return false if the extension is too short
// should return false if there's nothing before the @
// should return false if there's no dot in the domain
// should return true with a simple valid email
// should return true with a more complex valid email
