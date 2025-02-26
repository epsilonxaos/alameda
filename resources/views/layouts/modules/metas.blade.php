@if (env('APP_ENV') == 'production')
    <link rel="icon" type="image/png" href="{{ asset('favicon/favicon-96x96.png') }}" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="{{ asset('favicon/favicon.svg') }}" />
    <link rel="shortcut icon" href="{{ asset('favicon/favicon.ico') }}" />
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('favicon/apple-touch-icon.png') }}" />
    <meta name="apple-mobile-web-app-title" content="Alameda" />
    <link rel="manifest" href="{{ asset('favicon/site.webmanifest') }}" />


    <meta name="description"
        content="En el coraz&oacute;n de una de las zonas de mayor tradici&oacute;n en M&eacute;rida nace una nueva privada residencial con un esp&iacute;ritu moderno y actual, en la que el dise&ntilde;o y la funcionalidad de espacios definen un estilo de vida &uacute;nico en la zona. &iexcl;Sorp&eacute;ndete con Alameda City Homes!" />
    <meta name="author" content="{{ config('app.name', 'Alameda') }}" />
    <meta property="og:type" content="es_MX" />
    <meta property="og:locale" content="website" />
    <meta property="og:site_name" content="{{ config('app.name', 'Alameda') }}" />
    <meta property="og:title" content="{{ config('app.name', 'Alameda') }}" />
    <meta property="og:url" content="{{ config('app.url') }}" />
    <meta property="og:description"
        content="En el coraz&oacute;n de una de las zonas de mayor tradici&oacute;n en M&eacute;rida nace una nueva privada residencial con un esp&iacute;ritu moderno y actual, en la que el dise&ntilde;o y la funcionalidad de espacios definen un estilo de vida &uacute;nico en la zona. &iexcl;Sorp&eacute;ndete con Alameda City Homes!" />
    <meta property="og:image" content="{{ asset('img/fb.png') }}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />

    <script type="text/javascript">
        (function(c, l, a, r, i, t, y) {
            c[a] = c[a] || function() {
                (c[a].q = c[a].q || []).push(arguments)
            };
            t = l.createElement(r);
            t.async = 1;
            t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "qexgohpn6c");
    </script>

    <!-- Meta Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '459740600440081');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=459740600440081&ev=PageView&noscript=1" /></noscript>
    <!-- End Meta Pixel Code -->
@endif
