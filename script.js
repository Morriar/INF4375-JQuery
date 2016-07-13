/*
 * Copyright 2014 Alexandre Terrasa <alexandre@moz-code.org>.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* Exercice 1: Manipuler les sélecteurs JQuery */

// Changer la couleur des titres
$(".title").css("color", "#203253");

// Enlever le padding des titres de sidebar
$("#sidebar h2").css("padding", 0);

// Changer la couleur des liens contenant la chaîne Jack
$("a:contains('Jack')").css("color", "orange");

// Changer l'alignement des liens
$(".post div:has(a.links)").css("text-align", "right");

// Cocher les checkbox
$(":checkbox").attr("checked", "checked");

/* Exercice 2: Manipuler le HTML */

// Ajouter un élément au menu

//$("#menu ul").append("<li><a href='http://jquery.com/'>JQuery</a></li>"); // mani;ere lente

$("#menu ul").append(
	$("<li>").append(
		$("<a>")
		.attr("href", "http://jquery.com")
		.text("JQuery")
	)
);

// Ajouter un élément à la sidebar
$("#sidebar ul").append(
	$("<li>")
	.append(
		$("<h2>").text("JQuery")
	)
	.append(
		$("<p>").text("jQuery is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. jQuery is designed to change the way that you write JavaScript.")
	)
);

// Supprimer le deuxième élément de la sidebar
$("#sidebar ul li:nth-child(2)").detach();

// Ajouter la classe red à l'élément Accueil du menu
$("#menu ul li a:contains('Accueil')").addClass("red");

// Changer le texte des boutons lire la suite
$("a.links").text("Lire la suite...");

// Numéroter les posts
$(".post").each( function(i) {
	$(this).find("h2").prepend((i + 1) + " - ");
});

/* Exercice 3: Manipuler les évènements */

// Ajouter une évènement onclick à un élément
$("#sidebar h2").click( function() {
	$(this).toggleClass("orange");
});

// Ajouter un évènement onmouseover
$("#menu li").mouseover( function() {
	$(this).css("background-color", "orange");
});
$("#menu li").mouseout( function() {
	$(this).css("background-color", "#182739");
});

// Changer la classe des éléments vides du formulaire au submit
$("form").submit( function() {
	$("form :empty").addClass("error");
	return false; // return false pour ne pas envoyer de données
});

// Masquer la div sidebar lorsqu'on clique sur le H2 correspondant
$("h2.title").click( function() {
	//$(this).parent().find(".entry").toggle(); // commenté pour le slide un peu plus loin
});

/* Exercice 4: Effets visuels avec JQuery */

// Masquer la div entry lorsqu'on clique sur le H2 correspondant avec un slide
$("h2.title").click( function() {
	//$(this).parent().find(".entry").fadeToggle('slow');
	$(this).parent().find(".entry").slideToggle('slow');
});
