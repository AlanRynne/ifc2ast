# IFC to AST

![GitHub last commit](https://img.shields.io/github/last-commit/AlanRynne/ifc2ast)
[![Build Status](https://travis-ci.com/AlanRynne/ifc2ast.svg?branch=develop)](https://travis-ci.com/AlanRynne/ifc2ast)
[![codecov](https://codecov.io/gh/AlanRynne/ifc2ast/branch/develop/graph/badge.svg)](https://codecov.io/gh/AlanRynne/ifc2ast)
![GitHub](https://img.shields.io/github/license/AlanRynne/ifc2ast)

**_IFC2AST_** is a helper package for the IFC Language Server I am developing as a complete overhaul of the [IFC Syntax](https://github.com/AlanRynne/ifc-syntax) extension for VSCode.

This small package will generate an Abstract Syntax Tree (AST) of a given IFC file, to be consumed by the language server in order to provide functionality such as:

- Go to definition
- Go to symbol
- Find references
- Syntax error checking
- Validation

The AST nodes can be traversed using the _visitor pattern_ (which to be honest, I had no idea what it was until last week even though I've been using it for years! The perils of a self-taught programmer...).

The project is written in typescript and developed by myself, @AlanRynne.
