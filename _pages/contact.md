---
layout: page
title: Kontak
permalink: /kontak
comments: false
---

<form action="https://formspree.io/{{site.email}}" method="POST">    
<p class="mb-4">Silahkan kirim pesan anda untuk {{site.name}}. Kita akan balas sesegara mungkin!</p>
<div class="form-group row">
<div class="col-md-6">
<input class="form-control" type="text" name="name" placeholder="Nama*" required>
</div>
<div class="col-md-6">
<input class="form-control" type="email" name="_replyto" placeholder="Alamat Email*" required>
</div>
</div>
<textarea rows="8" class="form-control mb-3" name="message" placeholder="Pesan*" required></textarea>    
<input class="btn btn-dark" type="submit" value="Send">
</form>