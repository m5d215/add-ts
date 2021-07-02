# add-ts

Add timestamp to each line of stdin.

## Installation

TODO

## Usage

```sh
$ seq 10 | xargs -I% bash -c 'echo % && sleep 1' | add-ts --format HH:mm:ss.SSS
10:22:58.621| 1
10:22:59.577| 2
10:23:00.575| 3
10:23:01.573| 4
10:23:02.574| 5
10:23:03.574| 6
10:23:04.572| 7
10:23:05.573| 8
10:23:06.572| 9
10:23:07.570| 10
```

See <https://deno.land/std@0.100.0/datetime> for more information on timestamp formats.
