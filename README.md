# rules_js test

Testing an issue with `rules_js@1.27.1` not pulling in transitive dependencies when using `js_run_binary`, when the 1st party dependencies are referenced via `npm_link_package` in the repo root.

When 'package-1' references 'package-0' via `//:node_modules/package-0`, the transitive dependency `lodash` of 'package-0' is not available at runtime.

## Steps to Reproduce

Execute: 

```
$ bazel build //package-1:generate_uppercase_txt
```

You should see `Error: Cannot find module 'lodash'`.

The 'generate_uppercase_txt' target is a `js_run_binary` rule.

## What does work

If running the `js_binary` itself with `bazel run`, it works as expected:

```
$ bazel run //package-1:bin
```

(generates the file)