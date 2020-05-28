
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/tentang",
    "title": "@mudaislami merupakan akun dakwah yang ada di instagram dan facebook. Kontennya berisikan dakwah, reminder, dan quotes.",
    "body": "Website ini merupakan media resmi dari halaman Muda Islami. Di sini kita akan memuat pembahasan tulisan secara lebih mendalam, tips seputar dakwah dengan memanfaatkan teknologi yang kita miliki saat ini, dan artikel dakwah. :love_letter: Ke instagram @mudaislami → Ke facebook @mudaislami → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/kontak",
    "title": "Kontak",
    "body": "  Silahkan kirim pesan anda untuk Muda Islami. Kita akan balas sesegara mungkin!   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/",
    "title": "Halaman Awal",
    "body": "                                                                                              Pantaskah Aku Berdakwah?              :       Alhamdulillah teman-teman, ini adalah tulisan paling awal di website kita @mudaislami. Semoga dengan adanya website ini dapat menjadikan dakwah ini semakin meluas dan semakin bermanfaat bagi banyak orang. :                                                                               @mudaislami                 27 May 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/pantaskah-aku-berdakwah/",
    "title": "Pantaskah Aku Berdakwah?",
    "body": "2020/05/27 - Alhamdulillah teman-teman, ini adalah tulisan paling awal di website kita @mudaislami. Semoga dengan adanya website ini dapat menjadikan dakwah ini semakin meluas dan semakin bermanfaat bagi banyak orang. Pada artikel ini kita akan membahas mengenai dakwah dan kepantasan diri. Kebanyakan orang masih menganggap bahwa dalam menyampaikan kebaikan, maka diri ini harus terlebih dahulu menjadi sempurna kebaikannya. Padahal tidak demikian teman-teman, karena kita semua pasti tak pernah lepas dari dosa dan kesalahan. Bahkan Imam Al-Hasan Al-Bashri pernah mengatakan,  “Wahai sekalian manusia sungguh aku akan memberikan nasihat kepada kalian padahal aku bukanlah orang yang paling shalih dan yang paling baik di antara kalian. Sungguh aku memiliki banyak maksiat dan tidak mampu mengontrol dan mengekang diriku supaya selalu taat kepada Allah. Andai seorang mukmin tidak boleh memberikan nasihat kepada saudaranya kecuali setelah mampu mengontrol dirinya niscaya hilanglah para pemberi nasihat dan minimlah orang-orang yang mau mengingatkan. ” (Tafsir Qurthubi, 1/410) Maka, hendaklah kita saling mengingatkan akan kebaikan tanpa harus menunggu menjadi sempurna. Kesempurnaan hanya milik Allah Ta’aala. Kita sebagai seorang muslim memiliki kewajiban untuk saling mengingatkan dan menasehati, entah diri kita sudah baik atau belum. Tentunya dalam menasehati atau mengingatkan haruslah dilakukan dengan cara yang baik. Apa yang kita sampaikan kepada orang lain, juga harus bisa kita pertanggungjawabkan, apalagi kalau itu perihal agama. Reminder bagi kita semua, bahwa meski tak harus menjadi sempurna untuk berdakwah, menyampaikan kebaikan, atau menasehati sesama, kita tetap tidak boleh sembarang dalam menyampaikan sesuatu. Jadikanlah Al-Qur’an dan Al-Hadits sebagai pedoman, bukannya hawa nafsu kita. Jangan pula mengartikan ayat atau hadits tanpa ilmu, karena bisa jadi kita akan tersesat dalam memahaminya. Bertanyalah kepada yang memiliki kapasitas terhadap ilmu tersebut, yaitu kepada ulama yang memegang teguh Al-Qur’an dan Al-Hadits. Sebelum mengakhiri tulisan, saya akan sampaikan sebuah hadits, dari Abdullah bin Amr radhiyallahu ta’ala ‘anhu, bahwa Nabi shallallaahu ‘alaihi wa sallam bersabda,  “Sampaikanlah dariku walau hanya satu ayat” (HR. Bukhari) Rasulullah memerintahkan kita untuk menyampaikan perkara agama dari beliau. Maka setiap kali kita menyampaikan hal tersebut dan dilihat, didengar atau diamalkan oleh orang lain, insyaAllah bagi kita pahala kebaikan yang terus mengalir meski kita telah pergi meninggalkan dunia ini. Sekian untuk tulisan kali ini, mungkin tidak banyak tapi semoga apa yang tertulis di sini dapat memotivasi teman-teman untuk semakin semangat dalam menyampaikan kebaikan dengan bertanggung jawab. :innocent: "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Tutup</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Hasil pencarian untuk '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Maaf, pencarian tidak ditemukan. Silahkan tutup dan lakukan pencarian yang lain :)</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});