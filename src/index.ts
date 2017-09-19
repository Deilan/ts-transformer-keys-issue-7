const ts = require("typescript");
const keysTransformer = require("ts-transformer-keys/transformer").default;

const program = ts.createProgram([/* your files to compile */], {
    strict: true,
    noEmitOnError: true,
    target: ts.ScriptTarget.ES5,
});

const transformers = {
    before: [keysTransformer(program)],
    after: [],
};
const { emitSkipped, diagnostics } = program.emit(undefined, undefined, undefined, false, transformers);

if (emitSkipped) {
    throw new Error(diagnostics.map((diagnostic: any) => diagnostic.messageText).join("\n"));
}
import { keys } from "ts-transformer-keys";

interface Props {
  id: string;
  name: string;
  age: number;
}
const keysOfProps = keys<Props>();

console.log(keysOfProps); // ['id', 'name', 'age']
