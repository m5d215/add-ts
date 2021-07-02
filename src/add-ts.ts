import { format as formatDate } from "https://deno.land/std@0.100.0/datetime/mod.ts";
import { parse } from "https://deno.land/std@0.100.0/flags/mod.ts";
import { readLines } from "https://deno.land/std@0.100.0/io/bufio.ts";

const { format, separator } = parse(Deno.args, {
  default: {
    format: "yyyy-MM-dd HH:mm:ss.SSS",
    separator: "| ",
  },
});

for await (const line of readLines(Deno.stdin)) {
  const ts = formatDate(new Date(), format);
  console.log(`${ts}${separator}${line}`);
}
