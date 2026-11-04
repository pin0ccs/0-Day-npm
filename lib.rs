pub fn canary() -> i32 { 42 }

// unused variable to attract clippy output
pub fn unused() -> i32 { let x = 1; 2 }
