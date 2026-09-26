#!/bin/bash

git add .

if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
fi

git commit -m "Daily update"
git push origin main