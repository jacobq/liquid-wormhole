If you don't want to use Liquid Wormhole for modals, or need to have more fine
grained control of your wormholes, you can create a custom `liquid-destination`. By
default all `liquid-wormhole`s are rendered to the `default` destination. You can
replace this destination, or create a new one and send wormholes to it using the `to`
property:

```
<!-- Replaces the default liquid-destination -->
{{liquid-destination}}

<!-- Adds a new liquid-destination named "my-destination" -->
{{liquid-destination name="my-destination"}}

...

<!-- Appends to the default destination above -->
{{liquid-wormhole}}

<!-- Appends to the named destination above -->
{{liquid-wormhole to="my-destination"}}
```
