
#!/bin/sh

set -xe

if [ -z $1 ]; then
	echo Add a filename to command: ./build.sh filename

	else
    ts-node 83-remove-duplicates-from-sorted-list.ts

    time ( ts-node 83-remove-duplicates-from-sorted-list.ts) >&1 1>/dev/null 


fi
         
