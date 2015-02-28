#!/bin/sh -e
rm -rf publish
mkdir publish
for d in css fonts images js ; do
    cp -r src/$d publish/$d
done
for f in src/*.page.html ; do
    base=$(basename $f .page.html)
    cat src/header.html $f src/footer.html > publish/$base.html
done
echo DONE
