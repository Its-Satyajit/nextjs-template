[**nextjs-template**](../../../../README.md)

---

[nextjs-template](../../../../README.md) / [src/routes/makeRoute](../README.md) / RouteBuilder

# Type Alias: RouteBuilder\<Params, Search\>

```ts
type RouteBuilder<Params, Search> = CoreRouteElements<Params, Search> & (p?: input<Params>, search?: input<Search>) => string;
```

Defined in: [src/routes/makeRoute.tsx:115](https://github.com/Its-Satyajit/nextjs-template/blob/a020f2e64682696d16eea8be5c54d400aa09764e/src/routes/makeRoute.tsx#L115)

## Type Parameters

| Type Parameter                   |
| -------------------------------- |
| `Params` _extends_ `z.ZodSchema` |
| `Search` _extends_ `z.ZodSchema` |