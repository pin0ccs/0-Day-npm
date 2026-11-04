use std::io::Write;
fn main() {
    println!("cargo:warning=CRCE_EXECUTED_C4NARY_7421_BUILD_SCRIPT_RAN");
    println!("cargo:rerun-if-changed=build.rs");
    let out_dir = std::env::var("OUT_DIR").unwrap_or_else(|_| ".".into());
    let p = std::path::Path::new(&out_dir).join("crce_marker.txt");
    if let Ok(mut f) = std::fs::File::create(&p) {
        let _ = f.write_all(b"CRCE_EXECUTED_C4NARY_7421\n");
    }
}
