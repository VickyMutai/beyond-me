<?php include "server.php" ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Beyond Me</title>

    <!-- bootstrap css -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossorigin="anonymous"
    />

    <link rel="stylesheet" href="../css/style.css" />
    <link rel="stylesheet" href="../css/form.css" />

    <script src="../js/script.js"></script>

    <!-- TinyMCE -->
    <script
      src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js"
      referrerpolicy="origin"
    ></script>
    <script>
      tinymce.init({ selector: "textarea" });
    </script>
  </head>
  <body>
    <div class=""></div>
    <a href="../index.html">Back to site</a>
    <section class="sign-up quater-left half-width full-width">
      <h1>Create Account</h1>

      <form action="register.php" method="post">
        <?php include "errors.php" ?>
        <section id="" class="">
          <input type="text" name="name" placeholder="name" required />
          <input type="text" name="username" placeholder="username" required />
          <input type="text" name="email" placeholder="email" required />
          <input type="password" name="password_1" placeholder="password"required/>
          <input type="password" name="password_2" placeholder="confirm password" />
          <button type="submit" name="reg_user">Sign Up</button>
          <hr />
          <div class="auth-actions">
            <a href="./forgotpassword.html">Forgot Password</a>
            <a href="./register.php">Already have an Account</a>
          </div>
        </section>
      </form>
    </section>
    <!-- bootstrap js -->
    <script
      src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
      integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
