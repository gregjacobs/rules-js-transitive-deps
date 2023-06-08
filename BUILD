load("@aspect_rules_ts//ts:defs.bzl", "ts_config")
load("@aspect_rules_js//npm:defs.bzl", "npm_link_package")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

npm_link_package(
    name = "node_modules/package-0",
    src = "//package-0",
)

npm_link_package(
    name = "node_modules/package-1",
    src = "//package-1",
)

ts_config(
    name = "tsconfig",
    src = "tsconfig.json",
    visibility = ["//visibility:public"],
)
