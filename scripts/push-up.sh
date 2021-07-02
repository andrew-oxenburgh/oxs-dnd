yarn
yarn build
yarn export

rsync -rPv  ./out/* ../andrew-oxenburgh.github.io/dnd
