# #!/bin/bash   myself 
# git add .      
# git commit -m "commit from script"
# git push -u origin main

# Ai to improve it, if there is no commit

#!/bin/bash
git add .

if git diff --cached --quiet; then
    echo "No changes to commit."
    exit 0
fi

git commit -m "Daily update"
git push origin main