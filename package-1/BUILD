load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_library", "js_run_binary")
load("@aspect_rules_js//npm:defs.bzl", "npm_package")
load("@aspect_rules_ts//ts:defs.bzl", "ts_config", "ts_project")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages()

js_run_binary(
    name = "generate_uppercase_txt",
    mnemonic = "GenerateUppercaseTxt",
    tool = ":bin",
    outs = ["uppercase.txt"],
)

js_binary(
    name = "bin",
    data = [":library"],
    entry_point = "dist/index.js",
)

npm_package(
    name = "package-1",
    srcs = [":lib"],
    out = "pkg",
    include_runfiles = False,
    package = "package-1",
    visibility = ["//visibility:public"],
)

js_library(
    name = "lib",
    srcs = [
        "package.json",
        ":library"
    ],
)

ts_project(
    name = "library",
    visibility = ['//visibility:public'],
    tsconfig = ":tsconfig",
    srcs = glob(["src/**/*.ts"]),
    source_map = True,
    declaration = True,
    root_dir = "src",
    out_dir = "dist",
    supports_workers = False,
    deps = [
        "//:node_modules/@types/node",
        "//:node_modules/package-0",
    ],
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    deps = [
        "//:tsconfig"
    ]
)
