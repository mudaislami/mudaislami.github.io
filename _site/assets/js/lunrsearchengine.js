
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/tentang",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
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
    "body": "                                                                                               Mencintai Seseorang Karena Allah.               :       :sweat_smile: :sweat_smile: Cinta merupakan fitrah dari setiap manusia, tidak ada manusia yang ingin hidup tanpa cinta di dunia ini. Setiap manusia pasti ingin dicintai dan memiliki cinta di dalam hatinya. . . . :                                                                               @mudaislami                 25 May 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/mencintai-seseorang-karena-allah/",
    "title": "Mencintai Seseorang Karena Allah.",
    "body": "2020/05/25 - :sweat_smile: :sweat_smile:Cinta merupakan fitrah dari setiap manusia, tidak ada manusia yang ingin hidup tanpa cinta di dunia ini. Setiap manusia pasti ingin dicintai dan memiliki cinta di dalam hatinya. Tak ada yang salah dalam mencintai seseorang. Tak ada yang salah dalam menaruh hati kepada seseorang. Karena kadang kita tak bisa memilih kepada siapa cinta itu berlabuh. Namun, kita tetap dapat memilih untuk mengendalikan perasaan kita.  Ya Allah, jika dia baik untukku, agamaku, dan masa depanku, dekatkanlah dia padaku dan dekatkanlah aku padanya. Always a center of entertainment for the aristocracy, in the 1870s it also became a regular destination of some of the best known figures of art and the demi-monde. Edgar Degas and Henri de Toulouse-Lautrec portrayed visitors at the night club, and Aristide Bruant performed there.  It was decorated in an 18th-century rococo style, redesigned by Sybille de Margérie with furnishings by Sonia Rykiel. Following a renovation of the hotel in 1981–85, the restaurant occupied a former private ballroom with windows looking out on the Place de la Concorde, a few hundred meters from the Palais Garnier. Les Ambassadeurs had two Michelin stars. In the last decade of its operation, chef was Dominique Bouchet followed by Jean-François Piège and finally when the hotel closed in 2013 for an extended renovation, Christopher Hache. In 2017 Hache opened a smaller restaurant, L’Écrin, within the renovated hotel; the former space of Les Ambassadeurs became a bar. "
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
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
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
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
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