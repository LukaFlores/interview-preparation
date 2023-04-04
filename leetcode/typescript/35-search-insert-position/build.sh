
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 35-search-insert-position.ts

    time ( ts-node 35-search-insert-position.ts) >&1 1>/dev/null 


fi
         
