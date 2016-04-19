<!doctype html>
<html data-ng-app="application">
    <head>
        <title>Basic Project</title>

        <link rel="stylesheet" href="build/scss.css">

        <% paths.css.forEach(function (path) {%>
        <link rel="stylesheet" href="<%- path %>">
        <% }); %>
        <% paths.js.forEach(function (path) {%>
        <script type="text/javascript" src="<%- path %>"></script>
        <% }); %>
    </head>
    <body ui-view>
    </body>
</html>
