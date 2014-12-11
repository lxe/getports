# getports

Find multiple open ports to listen on. It's `[https://github.com/mikeal/getport](getport)` for multiple ports. Calling vanilla `getport` in parallel will return the same open port, requiring you to utilize the port after each callback, before calling `getport` again, which is what `getports` does.

#### `getports(num, opts, function (err, ports) {})`

```javascript
getports(3, function onPorts(error, ports) {
  if (error) throw error;

  server.listen(ports[0]);
  server.listen(ports[1]);
  server.listen(ports[2]);
});
```

 - `opts.start` [optional] - first port to try
 - `opts.last` [optional] - last port to try

#### License

MIT
