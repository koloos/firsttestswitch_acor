import React from 'react'

function reCaptcha() {
    const onloadCallback = function() {
        alert("recaptcha est prêt!");
      };
  return (
    <form action="?" method="POST">
      <div class="g-recaptcha" data-sitekey="6LccJNYfAAAAAPzQxWnLGhEdJ7PKwFHXJYLeVzVu"></div>
      <br/>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default reCaptcha