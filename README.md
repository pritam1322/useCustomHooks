
# useCustomMemo
Created with CodeSandbox

## Installation

Use the package manager yarn to install foobar.

```bash
yarn install
```

## Usage

```typescript
import { useRef } from "react";

export function useCustomMemo<T>(factory: () => T, deps: any[]): T {
  const cache = useRef<{ value: T; deps: any[] } | null>(null);

  const hasChanged =
    !cache.current || deps.some((dep, i) => dep !== cache.current!.deps[i]);

  if (hasChanged) {
    cache.current = { value: factory(), deps };
  }

  return cache.current!.value;
}


```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
