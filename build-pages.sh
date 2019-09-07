#!/bin/bash
set -e
cp docs/CNAME .
rm -rf docs
rm -rf public
rm -rf .cache
npm run build
mv public docs
mv CNAME docs/CNAME
