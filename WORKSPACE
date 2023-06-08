workspace(
    name = "rules_js_test",
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

###########################################
# rules_js
###########################################

http_archive(
    name = "aspect_rules_js",
    sha256 = "0b69e0967f8eb61de60801d6c8654843076bf7ef7512894a692a47f86e84a5c2",
    strip_prefix = "rules_js-1.27.1",
    url = "https://github.com/aspect-build/rules_js/releases/download/v1.27.1/rules_js-v1.27.1.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")
rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")
nodejs_register_toolchains(
    name = "node",
    node_version = "16.18.1",
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")
npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    data = [
        "//:package.json",
        "//:pnpm-workspace.yaml",
    ],
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")
npm_repositories()

###########################################
# rules_ts
###########################################

http_archive(
    name = "aspect_rules_ts",
    sha256 = "8eb25d1fdafc0836f5778d33fb8eaac37c64176481d67872b54b0a05de5be5c0",
    strip_prefix = "rules_ts-1.3.3",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v1.3.3/rules_ts-v1.3.3.tar.gz",
)

load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")
rules_ts_dependencies(
    # This keeps the TypeScript version in-sync with the editor, which is typically best.
    ts_version_from = "//:package.json",
)

###########################################
# rules_jasmine
###########################################

http_archive(
    name = "aspect_rules_jasmine",
    sha256 = "5a263b8ff5c708db63fff41af737bd1c37b9cec641b303e66944e342e5ca0550",
    strip_prefix = "rules_jasmine-1.0.0",
    url = "https://github.com/aspect-build/rules_jasmine/releases/download/v1.0.0/rules_jasmine-v1.0.0.tar.gz",
)

load("@aspect_rules_jasmine//jasmine:dependencies.bzl", "rules_jasmine_dependencies")
rules_jasmine_dependencies()