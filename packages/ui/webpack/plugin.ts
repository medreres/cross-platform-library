type Params = {
  callback: () => void;
};

export class AfterBundlePlugin {
  constructor(private readonly params: Params) {}

  apply(compiler) {
    compiler.hooks.done.tap(
      'Hello World Plugin',
      (_stats /* stats is passed as an argument when done hook is tapped.  */) => {
        this.params.callback();
      },
    );
  }
}
