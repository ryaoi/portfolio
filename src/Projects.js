import React, { Component } from "react";

class Projects extends Component {
	constructor(props) {

		var projectInfo = {
			"libft":`Ce premier projet en tant qu'étudiant de 42 va vous faire consolider vos acquis de piscine. Vous allez recoder un certain nombre de fonctions de la librairie C standard, ainsi que d'autres fonctions utilitaires que vous réutiliserez tout au long de votre cursus.`,
			"get_next_line":`Qu'il s'agisse d'un fichier, de l'entrée standard, ou même plus tard d'une connexion réseau, vous aurez toujours besoin de lire du contenu ligne par ligne. Il est donc temps de vous attaquer à cette fonction, indispensable pour un certain nombre de vos prochains projets.`,
			"ft_ls":`Pour tout connaitre du filesystem, de la façon dont sont rangés les fichiers et répertoires, codez par vous-même une des commandes les plus utilisées : ls .`,
			"fdf":`Tous les programmes que vous avez écris jusqu'à maintenant s'exécutaient uniquement en mode texte dans votrDécouvrons maintenant quelque chose de plus excitant : comment ouvrir une fenêtre graphique et dessiner dedans ?
			Pour commencer votre voyage au pays de la programmation graphique, FdF vous propose de représenter le maillage en "fils de fer" d'un terrain en 3D.`,
			"ft_printf":`Vous en avez assez de faire vos affichages en alternant ft_putstr et ft_putnbr ? Vous n'avez pas le droit d'utiliser printf ? Recodez le votre ! Ce sera l'occasion de découvrir une feature du C - les fonctions variadiques - et de vous entrainer à la gestion fine des options d'affichage. Vous aurez ensuite le droit d'utiliser votre printf dans tous vos projets ultérieurs.`,
			"minishell":`Première étape de la réalisation d'un shell. Dans ce projet, vous devez réaliser un mini-shell capable de lire et d'évaluer des commandes simples de l'utilisateur. La lecture impliquera une analyse lexicale et syntaxique triviale de la commande, et l'évaluation impliquera de rechercher le binaire correspondant sur la machine et l'exécuter, ou bien d'exécuter le code concerné dans le cas d'une commande "built-in" au shell.`,
			"wolf3d":`Inspiré du célèbre jeu éponyme des années 90 qui fut le premier First Person Shooter, ce projet vous permet d'aborder la technique du ray-casting. Votre but sera de représenter une vue dynamique à l'intérieur d'un labyrinthe dans lequel on peut se déplacer.`,
			"c-exam-alone-in-the-dark-beginner":`Les examens machine permettent de vérifier vos acquis lorsque vous êtes seulsPour valider ce projet (qui est un pré-requis à votre départ en 1er stage), il vous faut valider 5 examens avec une note minimum de 75.`,
			"fract-ol":`Découvrez la programmation 2D et l'univers psychédelique des fractales grâce à ce projet à réaliser avec la minilibX.`,
			"corewar":`Ce projet vous invite à créer une arène virtuelle et à y faire s’affronter des programmes codés dans un langage simpliste. Vous allez ainsi aborder la conception d’une VM (avec les instructions qu’elle reconnait, les registres, etc), et les problématiques de compilation d’un langage assembleur en bytecode. Avec, en bonus, le plaisir de faire s’affronter vos champions sur votre arène !`,
			"rtv1":`Découvrez les principes fondamentaux du Raytracing : la création d'images de synthèses par ordinateur. Ce premier projet vous fera réaliser des scènes simples impliquant des objets et des lumières non complexes.`,
			"rt":`Passez à la vitesse supérieure ! Suite du Rtv1, le RT pousse beaucoup plus loin les possibilités du Raytracing : effet miroir, transparence, découpe des objets, applications de textures... Capitalisez sur le projet précédent pour réaliser une infrastructure capable de supporter toutes ces ramifications et obtenir de sublimes images de synthèse.`,
			"filler":`Créez votre joueur pour affronter d’autres étudiants sur le célèbre (ou pas) plateau du Filler. Le principe est simple : deux joueurs s’affrontent sur un plateau, et doivent placer, tour à tour, la pièce que le maître du jeu (fourni sous la forme d’un exécutable Ruby) leur donne, gagnant ainsi des points. La partie s’arrête dès qu’une pièce ne peut plus être placée. Petit projet ludique !`,
			"push_swap":`Ce projet vous demande de trier des données sur une pile, avec un set d’instructions limité, en moins de coups possibles. Pour le réussir, vous devrez manipuler différents algorithmes de tri et choisir la (ou les ?) solution la plus appropriée pour un classement optimisé des données.`,
			"lem_in":`Votre colonie de fourmis doit se déplacer d'un point à un autre. Mais comment faire pour que cela prenne le moins de temps possible ? Ce projet vous fait découvrir les algorithmes de parcours de graphe : votre programme devra sélectionner intelligemment les chemins et les mouvements précis qui doivent être empruntés par ces fourmis.`,
			"ft_sh2":`Vous repartez de votre minishell ft_sh1, et vous lui ajoutez le multi-commande, ainsi que les différentes redirections : entre processus, d'entrée/sortie sur des fichiers, et les aggrégations de filedescriptors. DEPRECATED`,
			"ft_select":`Ce projet a pour but de vous initier à la manipulation du terminal avec les termcaps. Vous allez ici apprendre à créer une interface utilisateur pour un programme lancé dans le terminal.`,
			"ft_sh3":`Dernier palier avant d'attaquer la réalisation d'un shell complet, vous reprenez pour ce projet votre minishell ft_sh2 et vous y ajoutez l'édition de ligne, afin que l'on puisse éditer la ligne de commande à la volée.`,
			"42sh":`Ce projet consiste à créer de toutes pièces un shell complet, en reprenant le travail effectué sur votre 21sh. Un jeu minimum de fonctionnalités vous sont demandées, à partir duquel vous allez constuire votre propre shell abouti - en allant potentiellement jusqu'au job control et au shell script. Ce projet vous permet donc de voir ou revoir une très large palette des fonctionnalités UNIX (et POSIX) standard.`,
			"malloc":`Que se cache derriere malloc ? Vous l'utilisez depuis la piscine C, mais ce n'est pas un appel système. Découvrez les rouages d'une gestion optimum de la mémoire, et recodez-le, ainsi que free et realloc.`,
			"nm-otool":`Décortiquez le format des exécutables MacOS et comprenez comment le kernel lance les binaires, en ré-écrivant ces deux outils du système. Indispensable pour tous ceux qui voudront faire de la sécurité, ce projet est plus généralement une ouverture sur la culture UNIX système.`,
			"ft_script":`Recoder la commande script va être pour vous l'occasion de comprendre les intéractions entre input utilisateur et tty, notamment la line discipline, ainsi que les pseudo-terminaux. Ce projet terminé, vous saurez enfin pourquoi un Ctrl-C dans votre shell interromp le programme en cours !`,
			"philosophers":`Comment gérer l’accès concurrentiel de plusieurs processus à des ressources partagées ? Ce projet vous initialise aux problématiques de la programmation parallèle via le fameux problème du « diner des philosophes ».`,
			"ft_p":`Ce projet introductif sur la programmation UNIX réseau vous invite à réaliser un client-serveur offrant des services identiques à ftp. Bonus : respectez le standard pour être interopérable avec les outils existants !`,
			"irc":`Ce projet sur la programmation UNIX réseau vous invite à réaliser un client-serveur offrant des services identiques à IRC. Votre implémentation devra utiliser correctement select(2) pour gérer la connexion simultanée des clients, ainsi que des buffers tournants pour gérer les messages des clients.`,
			"lem-ipc":`Vous avez vu précédemment la communication entre processus sur le réseau, via TCP/IP ; vous allez maintenant manipuler d’autres outils UNIX pour faire communiquer des processus en local. Vous allez découvrir ces outils via la création d’un client de jeu de plateau basique.`,
			"zappy":`Ce projet est l’aboutissement de vos précédents efforts en UNIX avancé : vous allez ici réaliser un jeu multi-joueurs en réseau TCP/IP. Ce jeu sera constitué d’un serveur gérant le terrain de jeu, d’un client graphique qui affiche l'état du plateau, et de clients IA qui se connectent sur le serveur pour piloter un joueur sur le terrain. C'est un projet très complet qui vous donne l'occasion d'exprimer votre créativité en plus de vos connaissances techniques !`,
			"piscine-php":`La piscine PHP va vous permettre d'accéder aux technologies de base du web.`,
			"rushes":`Les rushes sont la formule idéale pour explorer des problématiques complémentaires aux projets réguliers de votre cursus, en immersion avec vos collègues. Le temps d'un week-end par exemple, vous allez vous concentrer sur un sujet précis, croiser de nouvelles têtes pour vos futurs projets, et adopter un rythme intensif ! Les thématiques vous seront communiquées à l'avance, vous n'aurez qu'à vous présenter le jour J avec énergie et bonne humeur pour relever les challenges que l'on vous propose.`,
			"piscine-cpp":`Cette piscine C++ est le passage obligé pour le déblocage des projets de programmation orientée objet du cursus 42. Vous allez ici aborder les concepts de base de la POO à travers les spécifités du C++. `,
			"mod1":`Ce projet graphique de simulation vous fera représenter une surface en 3D, sur laquelle s'écoule de l'eau. Empirique, ou scientifique (avec nombre équations), recréez une vague, un tsunami, ou simplement de la pluie sur votre surface.`,
			"libftasm":`Ce projet a pour but de vous faire coder une minilib en ASM, en recodant quelques fonctions basiques de la libc. A la fin de ce projet vous serez familiarisés avec la syntaxe du langage, le fonctionnement de la stack, mais aussi le comportement du compilateur. Absolument indispensable pour continuer sur les projets de sécurité.`,
			"abstract-vm":`Ce projet vous remet dans le bain après la piscine C++ et vous invite à réaliser une machine virtuelle capable d'exécuter un code en pseudo-ASM basique. Vous allez ainsi utiliser une stack pour faire des opérations arithmétiques basiques, à l'instar de la commande dc.`,
			"open-project-i":`Ce projet est l'occasion d'aborder la gestion de projet sur le long terme, autour d'un sujet quiVous êtes entièrement libres dans le choix du sujet - ça peut être en lien avec l'informatique, ou être entièrement autre chose !
			Vos seules contraintes sont 1) de travailler en groupe avec d'autres étudiants de 42, 2) de réaliser votre projet sur une période de 5 mois.`,
			"root-me-app-systeme":`root-me.org, vous connaissez ? Ce site propose des challenges de sécurité de difficulté croissante, idéaux pour apprendre et se dépasser ! Nous vous proposons de valider vos connaissances et heures passées sur Root-Me via ce projet.
			Cette série de challenges Root-Me a pour but de vous faire découvrir comment détecter et exploiter des vulnérabilités applicatives sur binaires ELF32. Pour l'aborder, il vous faudra bien entendu des connaissances en C, en assembleur et une familiarité certaine avec gdb. Bonne chance !`,
			"nibbler":`Ce projet de C++ vous fait recoder le jeu Snake avec plusieurs interfaces graphiques différentes; le joueur devant pouvoir switcher entre les interfaces pendant le jeu. C'est l'occasion de voir comment charger et utiliser des bibliothèques dynamiques au runtime.`,
			"savoir-relier":`Ce projet est un peu différent des autres. Pas de code cette fois-ci, un questionnaire vous est proposé, suivi d'un échange verbal avec un peer : le but ici est de vous permettre de prendre du recul sur vous-même et sur votre relationnel aux autres avant de partir en stage. Ceci afin de nourrir vos réflexions et votre positionnement lors de cette immersion dans le monde professionnel. C'est un pré-requis à votre départ en stage.`,
			"n-puzzle":`Il s'agit ici de réaliser, dans le langage de votre choix, un programme capable de résoudre des Taquins de tailles variées, de façon aussi optimale que possible.`,
			"expert-system":`Ce projet vous demande de créer, dans le langage de votre choix, un système expert en calcul des propositions, autrement dit un programme capable de raisonner sur un ensemble de règles et de faits initiaux afin de déduire certains autres faits.`,
			"gomoku":`Ce projet vous demande de créer, dans le langage de votre choix, un jeu de Gomoku intégrant un joueur IA capable de battre un joueur humain le plus rapidement possible. Pour ce faire, vous allez implémenter un algorithme min-max mais aussi (et surtout), faire des recherches et essais pour trouver les heuristiques les plus adaptées. Ce ne sera pas aussi facile qu'un jeu de dames.`,
			"computorv1":`Le but de ce projet est de vous faire (re)prendre contact avec la manipulation d’outils mathématiques élémentaires, qui pourront vous être utiles dans de nombreux autres sujets de 42. Il ne s’agit pas de "faire des maths pour faire des maths", mais bien de vous permettre d’aborder plus progressivement et sereinement les sujets où il y en a besoin.
			Vous êtes libres dans le choix de langage pour réaliser le sujet.`,
			"first-internship":`Ce premier pas en entreprise est un passage important de votre cursus 42. Ce stage est le moment où vous allez découvrir le monde de l'entreprise et mettre en oeuvre vos capacités de travail, d'adaptation, au service du marché. C'est un premier élément pour votre CV, et l'occasion de voir émerger votre futur domaine de prédilection.`,
			"taskmaster":`Il s'agit de réaliser un programme de job control, dans le langage de votre choix. Ce qu'on vous demandera d'accomplir est très proche du programme supervisor`,
			"scop":`Faites vos premiers pas dans le monde de la 3D sur GPU avec de l'OpenGL. Les principaux concepts sont abordés lors d'un petit projet ludique.`,
			"piscine-c-day-00":`No Description`,
			"piscine-c-day-01":`No Description`,
			"piscine-c-day-02":`No Description`,
			"piscine-c-day-03":`No Description`,
			"piscine-c-day-04":`No Description`,
			"piscine-c-day-05":`No Description`,
			"piscine-c-day-06":`No Description`,
			"piscine-c-day-07":`No Description`,
			"piscine-c-day-08":`No Description`,
			"piscine-c-day-10":`No Description`,
			"piscine-c-day-11":`No Description`,
			"piscine-c-day-12":`No Description`,
			"piscine-c-day-13":`No Description`,
			"piscine-c-day-09":`No Description`,
			"piscine-c-rush-00":`No Description`,
			"piscine-c-rush-01":`No Description`,
			"piscine-c-rush-02":`No Description`,
			"piscine-c-sastantua":`No Description`,
			"piscine-c-match-n-match":`No Description`,
			"piscine-c-evalexpr":`No Description`,
			"piscine-c-bsq":`Maintenant, on ne rigole plus. Les Vogons ont besoin de vous pour trouver le plus grand terrain possible pour jouer au Brockian Simple-Qricket. A vous de combiner toutes ces nouvelles notions de C pour créer un algorithme capable de détecter le plus grand carré parfait dans une carte à obstacles.`,
			"42run":`Vous connaissez Temple Run ? Il est temps de le refaire ! Ce projet intermédiaire d'OpenGL vous invite à recréer ce jeu mobile. Amusez-vous : tous les bonus sont possible pour dépasser la célèbre franchise.`,
			"strace":`Premier pas d'une série de projets en C menant à la réalisation d'un mini-GDB, ce projet vous demande de recoder strace, un outil qui permet de lister tous les appels systèmes effectués par un programme en cours d'exécution.`,
			"part-time":`Une bonne insertion professionnelle reste un des objectifs fondamenteaux de l'école. Nous vous donnons, via ce projet, la possibilité de valoriser une activité professionnelle à temps partiel sur la troisième partie de votre scolarité.`,
			"final-internship":`Votre cursus 42 se clot sur une dernière période d'insertion professionnelle : le stage final. Ce stage est l'accomplissement de votre parcours, il vous permettra d'aller démontrer votre expertise en entreprise, et vous servira de tremplin pour lancer votre carrière.`,
			"communication-trainer":`Vous voulez vous préparer à vos entretiens de stages, developper vos capacités d'argumentation lors de réunions, être capable de résoudre des conflits en entreprise (ou lors des peer-évaluation à 42)  ? Suivez une journée de formation sur les techniques de communication orales en entreprise ! Si vous les souhaitez, dans un second temps, il peut être possible à votre tour de former des groupes d'étudiant.`,
			"piscine-ocaml":`Cette piscine OCaml est la porte d'entrée vers les projets de programmation fonctionnelle du cursus 42. Vous aborderez ici le paradigme fonctionnel à travers les spécificités de l'OCaml.`,
			"piscine-unity":`Vous avez déjà rêvé de programmer un jeu video ? Unity est une plate-forme de developpement graphique 2D et 3D simple à prendre en main sur laquelle vous pourrez developper vos premiers jeux videos pendant cette piscine !`,
			"corewar-championship":`Créez l'ultime champion de Corewar et écrasez toute compétition ! (Sauf le champion de zaz)`,
			"piscine-c-exam00":`No Description`,
			"piscine-c-exam01":`No Description`,
			"piscine-c-exam02":`No Description`,
			"piscine-c-exam-final":`No Description`,
			"ft_hangouts":`Ce projet a pour but de vous initier au développement d'application Android. Il s'agit de réaliser,Le but ici est de comprendre comment fonctionne une application Android, comment Android gère votre application et comment utiliser le SDK.`,
			"bomberman":`Bomberman, c'est un classique du jeu video : aussi simple dans son gameplay que fun à jouer ! Vous allez ici profiter de sa simplicité pour faire votre premier gros projet de C++ de facture professionnelle. Vous allez recoder une version de Bomberman, en C++ et avec OpenGL, avec pour objectif de réaliser un jeu le plus abouti possible.`,
			"electronics":`Le projet électronique consiste à fabriquer un prototype du projet de son choix : circuit et firmwaOn n'utilise pas de raspberry pi ou d'arduino, on les fabrique !
			
			Pour suivre ce projet vous aurez besoin de savoir lire l'anglais et d'avoir un niveau correct en C (opérations binaires notamment).
			
			Préparez-vous à suivre l'un des projets les plus durs du cursus et à sortir complètement de votre zone de confort. Vous serez en mode piscine au carré, et c'est voulu.
			Comptez une à deux journées par semaine minimum pendant 6 mois pour aller au bout du projet.`,
			"ft_linear_regression":`This project will be your first steps into AI and Machine Learning. You're going to start You will have to create a program that predicts the price of a car by using a linear function train with a gradient descent algorithm.`,
			"piscine-c-a-distance-jour-00":`No Description`,
			"piscine-c-a-distance-jour-01":`No Description`,
			"piscine-c-a-distance-jour-02":`No Description`,
			"piscine-c-a-distance-jour-03":`No Description`,
			"piscine-c-a-distance-jour-04":`No Description`,
			"piscine-c-a-distance-jour-05":`No Description`,
			"piscine-c-a-distance-jour-06":`No Description`,
			"piscine-c-a-distance-jour-07":`No Description`,
			"piscine-c-a-distance-jour-08":`No Description`,
			"piscine-c-a-distance-jour-09":`No Description`,
			"piscine-c-a-distance-jour-10":`No Description`,
			"piscine-c-a-distance-jour-11":`No Description`,
			"piscine-c-a-distance-jour-12":`No Description`,
			"piscine-c-a-distance-jour-13":`No Description`,
			"piscine-c-a-distance-sastantua":`No Description`,
			"piscine-c-a-distance-match-n-match":`No Description`,
			"piscine-c-a-distance-evalexpr":`No Description`,
			"piscine-c-a-distance-bsq":`No Description`,
			"42partnerships-initiation-ruby":`No Description`,
			"42partnerships-initiation-web":`No Description`,
			"krpsim":`Ce projet d'algorithmie consiste à réaliser un programme qui va optimiser le rendement d’un graphe de processus, avec des contraintes de ressources. A vous d'explorer les algorithmes existants possibles et de choisir, voire de créer, ce qui vous semble le plus adapté.
			Vous êtes libres dans le choix de langage pour réaliser le sujet.`,
			"21sh":`On passe aux choses sérieuses ! Avec 21sh, vous allez devoir écrire une implémentation proche de la réalitA l'aide de la bibliothèque Termcaps, vous ajouterez une édition de ligne fonctionnelle et utile à la partie "read" de votre shell. Déplacements du curseur, édition, historique, multilignes, etc.
			Mais surtout pour la partie "eval", oubliez la fonction ft_split que vous utilisiez dans votre Minishell pour découper la ligne de commande entrée par l'utilisateur !
			21sh sera votre premier interprète réaliste, et en tant que tel, ce projet vous permettra de découvrir les analyses lexicale, syntaxique, et sémantique communes aux interprètes et aux compilateurs.
			Avec des structures de données et des traitements adaptées, ajouter la gestions des pipes ("|") et des redirections ("<", "<<", ">>". ">") sera très simple !`,
			"rubik":`Projet d'algorithmie non-trivial, ce projet a pour but de vous faire réaliser un résolveur de Rubik's Cube.
			Vous êtes libres dans le choix de langage pour réaliser le sujet.`,
			"humangl":`Ce projet intermédiaire d'OpenGL est une introduction à la modélisation hiérarchique. Vous allez apprendre à utiliser les matrices afin de lier différentes parties d’un modèle humanoïde et les animer.`,
			"swifty-companion":`Ce projet a pour but de vous initier au développement d'application iOS. Il s'agit de réaliser, en Swift, une application qui permet de récupérer les informations des élèves de 42, en utilisant l’API de l'intranet de 42.`,
			"camagru":`Ce premier projet vous remet dans le bain après la piscine PHP : vous allez devoir réaliser, en PHP, un petit site Instagram-like permettant à des utilisateurs de réaliser et partager des photo-montages. Vous allez ainsi implémenter, à mains nues (les frameworks sont interdits), les fonctionnalités de base rencontrées sur la majorité des sites possédant une base utilisateur.`,
			"ft_ping":`Recoder la commande ping va vous permettre d'avoir une première approche dans la communication (TCP/IP) entre deux machines dans un réseau.`,
			"fillit":`Fillit est un projet vous permettant de découvrir et/ou de vous familiariser avec une problématique récurrente en programmation : la recherche d'une solution optimale parmi un très grand nombre de possibilités, dans un délai raisonnable. Dans le cas de ce projet, il s'agira d'agencer des Tetriminos entre eux et de déterminer le plus petit carré possible pouvant les accueillir.`,
			"piscine-c-formation-jour-00":`No Description`,
			"piscine-c-formation-jour-01":`No Description`,
			"ft_traceroute":`Recoder la commande traceroute va être pour vous l'occasion d'approfondir vos connaissances dans le reseau (TCP/IP) en faisant le suivit des chemins qu'un paquet IP va emprunter entre deux machines.`,
			"piscine-c-formation-jour-07":`No Description`,
			"piscine-c-formation-jour-08":`No Description`,
			"piscine-c-formation-jour-11":`No Description`,
			"piscine-c-formation-jour-10":`No Description`,
			"piscine-c-formation-jour-13":`No Description`,
			"piscine-c-formation-jour-12":`No Description`,
			"piscine-c-formation-exam-final":`No Description`,
			"piscine-c-formation-jour-02":`No Description`,
			"piscine-c-formation-jour-03":`No Description`,
			"piscine-c-formation-jour-04":`No Description`,
			"piscine-c-formation-jour-05":`No Description`,
			"piscine-c-formation-jour-06":`No Description`,
			"ft_nmap":`Recoder le programme nmap va être pour vous l'occasion d'approfondir vos connaissances dans le reseau (TCP/IP) et ainsi comprendre aussi via une utilisation avancee les threads dans un usage reel.`,
			"piscine-c-a-distance-libft-old":`Ce premier projet en tant qu'étudiant de 42 va vous faire consolider vos acquis de piscine. Vous allez recoder un certain nombre de fonctions de la librairie C standard, ainsi que d'autres fonctions utilitaires que vous réutiliserez tout au long de votre cursus.`,
			"piscine-c-a-distance-fillit":`Fillit est un projet vous permettant de decouvrir et/ou de vous familiariser avec une problematique recurrente en programmation : la recherche d'un solution optimale parmis un tres grand nombre de possibilites, dans un delais raisonable. Dans le cas de ce projet, il s'agira d'agencer des Tetriminos entre eux et de determiner le plus petit carre possible pouvant les accuellir.`,
			"matcha":`Ce second projet vous introduit à un outil plus évolué pour réaliser vos applications web : le micro-framework. Nous vous invitons à réaliser, dans le langage de votre choix, un site de rencontres. Les interactions entre utilisateurs seront au coeur du projet !`,
			"hypertube":`Dernier projet de sa série, le projet Hypertube vous invite à découvrir une catégorie d'outil extrêmement puissante : les frameworks MVC. Vous apprendrez à manipuler un MVC, dans le langage de votre choix, pour réaliser un site de streaming de video téléchargées via le protocole BitTorrent.`,
			"ft_turing":`ft_turing vous fera découvrir le modèle de Turing à la base du paradigme impératif à travers une implémentation de ce modèle en OCaml.`,
			"snow-crash":`Projet introductif à la sécurité en informatique, Snow Crash a pour but de faire découvrir la sécurité dans différents sous-domaines, avec une approche orientée développeur. Vous allez vous familiariser avec plusieurs langages (ASM/perl/php..), développer une certaine logique pour comprendre des programmes inconnus, et ainsi prendre conscience des problèmes liés à de simples "erreurs" de programmation .`,
			"darkly":`Projet introductif à la sécurité en informatique dans le domaine spécifique du web, ce projet va vous faire disséquer un site web vulnérable. Ce faisant, vous allez développer votre propre façon de penser "sécurité" dans une application web et prendre conscience des problèmes liés à de simples "erreurs" de développement, autant d'un point de vue programmation que d'un point de vue conception.`,
			"bootcamp-day-01":`No Description`,
			"bootcamp-day-02":`No Description`,
			"bootcamp-sastantua":`No Description`,
			"piscine-c-a-distance-c-exam-training":`Les examens machine permettent de vérifier vos acquis lorsque vous êtes sePour valider ce projet (qui est un pré-requis à votre départ en 1er stage), il vous faut valider 5 examens avec une note minimum de 75.`,
			"open-project-ii":`Ce second projet libre est l'occasion de perfectionner votre gestion de projet sur le long termVous êtes entièrement libres dans le choix du sujet - ça peut être en lien avec l'informatique, ou être entièrement autre chose !
			Vos seules contraintes sont 1) de travailler en groupe avec d'autres étudiants de 42, 2) de réaliser votre projet sur une période de 8 mois.`,
			"bootcamp-day-04":`No Description`,
			"bootcamp-day-05":`No Description`,
			"bootcamp-day-06":`No Description`,
			"bootcamp-day-08":`No Description`,
			"bootcamp-day-07":`No Description`,
			"bootcamp-match-n-match":`No Description`,
			"bootcamp-colle-00":`No Description`,
			"bootcamp-colle-01":`No Description`,
			"bootcamp-day-11":`No Description`,
			"bootcamp-day-10":`No Description`,
			"bootcamp-day-12":`No Description`,
			"bootcamp-day-13":`No Description`,
			"bootcamp-colle-02":`No Description`,
			"bootcamp-evalexpr":`No Description`,
			"bootcamp-bsq":`No Description`,
			"bootcamp-day-09":`No Description`,
			"swifty-proteins":`Ce projet a pour but de vous initier a Scene Kit un framework Apple pour créer scenes en 3D. Vous devrez principalement réaliser une application qui modélisera des ligands en 3D, cette application sera aussi l'occasion d'approfondir vos connaissances en Swift et des framework Apple tels que Touch ID, le partage sous iOS, les gestures ainsi que les UISearchBar.`,
			"ft_ality":`Ce projet va vous initier aux problématiques liées à l'analyse syntaxique automatique (dite "parsing"), en étudiant les automates finis avec un jeu de combat.`,
			"piscine-c-formation-exam06":`No Description`,
			"bootcamp-wtc-exam-00":`No Description`,
			"bootcamp-day-00":`No Description`,
			"bootcamp-day-03":`No Description`,
			"formation-pole-emploi-libft-old":`Ce premier projet en tant qu'étudiant de 42 va vous faire consolider vos acquis de piscine. Vous allez recoder un certain nombre de fonctions de la librairie C standard, ainsi que d'autres fonctions utilitaires que vous réutiliserez tout au long de votre cursus.`,
			"xv":`Ce projet vous est proposé par l'entreprise Daher et a pour but de vous faire développer une interface graphique sous Unity à des fin d'optimisation de processus industriels.`,
			"in-the-shadows":`Ce projet a pour but de vous faire développer un jeu complet nécessitant un peu d'algo et beaucoup de créativité.`,
			"particle-system":`Ce projet d’infographie est une introduction au monde merveilleux du GPU. Via l’utilisation d’OpenGL et d’OpenCL, permettant une parallélisation massive des calculs, vous devrez créer un système de particules tout en respectant les contraintes de performance imposées.`,
			"bootcamp-wtc-exam-01":`No Description`,
			"bootcamp-wtc-final-exam":`No Description`,
			"gbmu":`Ce projet a pour but de vous faire coder un émulateur de gameboy normal et color. Vous allez ainsi vous familiariser avec la documentation electronique, mieux appréhender l’émulation de hardware et comprendre le fonctionnement interne d’une gameboy ainsi que des roms`,
			"friends-with-benefits":`Friends with Benefits est un projet en partenariat avec l'entreprise Cozy-Cloud. Il vous permettra d'utiliser leur outil pour créer une One Page Application, en open source, qui sera ensuite disponible sur leur marketplace.		`,
			"init":`Ce projet est une introduction à l'administration système et au réseau, proposé par l'équipe slash16.`,
			"roger-skyline-2":`Ce projet proposé par slash16 vous donne la possibilité de monter votre propre infrastructure inspiré de celle de 42.`,
			"cloud-1":`Ce projet est une introduction aux serveurs en cloud.`,
			"ft_linux":`Le premier projet de la branche Kernel ! Il s'agit d'un simple LFS, afin que vous construisiez votre propre distribution sur laquelle vous travaillerez ensuite pour les prochains projets.`,
			"little-penguin-1":`Le début d'une série de challenges inspirés du challenge Eudyptula, vous permettant d'aborder de nombreux points du developpement Kernel.`,
			"bootcamp-wtc-exam-02":`No Description`,
			"rainfall":`Rainfall est un iso de challenge légèrement plus complexe que Snow Crash qui vous plongera dans les méandres du reverse engineering et vous apprendra à reconstruire un code et à en comprendre son fonctionnement afin d'en dénicher les failles. Pourrez-vous atteindre le dernier level ?`,
			"dr-quine":`Ce petit projet d'algo vous permet d'aborder les problématiques de l'auto-réplication, et vous confron au théorème de récursion de Kleene !`,
			"woody-woodpacker":`Projet dans la suite logique de nm/otools qui a pour principe de modifier les headers d'un fichier de type ELF64. Le but ici est de pouvoir ajouter un morceau de code et obfusquer une partie d'un fichier non strippé.`,
			"matt-daemon":`Projet Unix dont le but est de créer un daemon de type serveur. Ce serveur va alors écouter sur un port donné et interpréter une liste de commandes.`,
			"process-and-memory":`An introduction to syscalls and memory management within linux kernel`,
			"drivers-and-interrupts":`Learn how to connect a driver to your kernel. We will use a keyboard driver for this project.`,
			"filesystem":`Create your own filesystem, for your linux kernel.`,
			"kfs-2":`Discover the world of "Kernel Programming" and learn how to create your very own Kernel from scratch.`,
			"kfs-1":`Discover the world of "Kernel Programming" and learn how to create your very own Kernel from scratch.`,
			"kfs-3":`Third "Kernel from Scratch" project. Learn how to manage the memory in you kernel.`,
			"music-room":`Projet en partenariat avec "Deezer". Créez en groupe une application mobile complète de playlist collaborative en utilisant les SDK et API de Deezer. Au programme : du développement natif mobile, du développement de back-end et de la création d'API REST.`,
			"piscine-python-django":`Prenez en main la conception d'un backend WEB brillant par sa qualité et sa performance avec le framework Django.`,
			"piscine-swift-ios":`No Description`,
			"piscine-reloaded":`Revoyez les bases de la piscine avec une suite d'exercices tirée des sujets de celle-ci.`,
			"piscine-ruby-on-rails":`Apprenez à concevoir une WebApp puissante et robuste avec le Framework Rails.`,
			"red-tetris":`L’objectif de ce projet est de développer un jeu de tetris multijoueurs en réseau à partir d’une pile logicielle exclusivement Full Stack Javascript`,
			"h42n42":`Projet d'introduction au Framework OCSIGEN, permettant de créer des applications web riches en OCaml. Concevez un simulateur de Bestioles échappant à un dangereux virus !`,
			"famine":`Bienvenue dans le monde merveilleux des virus, trojans et autres hantises de <Insert random antiVirus software>... Votre but ici est de mettre vos compétences sur la manipulation des fichiers binaires et faire votre premier virus. ATTENTION : Ce projet est uniquement à but pédagogique.`,
			"kfs-4":`Projet visant a créer une Interrupt Description Table et gerer les interruptions avec votre Kernel.`,
			"kfs-5":`A vous maintenant de développer la gestion des process dans votre Kernel, en implementant de quoi interpréter la commande :(){ :|:& };:`,
			"matrice":`Le programme entrepreneurial Matrice vous propose régulièrement de vous engager autour d'un thème sur une création d'entreprise. D'une durée pouvant aller de 10 à 16 mois, ce programme peut éventuellement être l'ultime étape de votre cursus et vous mener jusqu'au certificat délivré par l'école.`,
			"hercules":`During 12 weeks, try to walk among the half-gods by doing the infamous twelve labors of Hercules `,
			"computorv2":`Maintenant que vous avez programmé votre résolveur d'équations, il est temps d'aller un peu plus loin. Computor V2 vous propose de créer votre propre calculette en ligne de commande, qui va intégrer votre computorv1 ainsi que des fonctions de calculs matriciels, de resolution de fonctions, de calculs sur nombre imaginaires etc...`,
			"docker-1":`Premier projet sur l'écosystème Docker. Apprenez à réfléchir en containers à travers ce sujet, qui vous fera manipuler le binaire docker et créer vos premiers containers avec des Dockerfiles`,
			"piscine-interview":`Learn how to learn again with Big(O) notation and other cool things`,
			"avaj-launcher":`First projet of the Java projects arc. Implementation of a simple Java program according to a given class diagram written in UML.`,
			"swingy":`This is the second project from the Java world at 42. You will learn to develop GUI applications with the SWING framework, in order to create an RPG game.`,
			"fix-me":`Final project of the Java Programming arc. Write a program that simulates stock exchanges and deals with trading algorithms, with networking and socket implementations. `,
			"kfs-6":`Keep on developping your own kernel. This project will help you set up your own filesystem.`,
			"kfs-7":`This project will teach you how to build your own syscalls for your kernel, as well as user accounts, sockets, and a Unix-like hierarchy. Almost a full kernel here!`,
			"kfs-8":`Build a module interface for your kernel.`,
			"kfs-9":`Create an ELF parser and loader for your kernel.`,
			"kfs-x":`This is the final kernel project. It just requires you to create a complete linux environment. Maybe name your kernel aswell?`,
			"ft_db":`No Description`,
			"crea-piscine-after-effects-day-00":`Les propriétés de base`,
			"crea-piscine-after-effects-day-01":`Masques et lissage de vitesse`,
			"crea-piscine-after-effects-day-02":`Calques 3D, caméras et lumières`,
			"crea-piscine-after-effects-day-03":`Keying, tracking et rotoscoping`,
			"crea-piscine-after-effects-day-04":`Expressions & Photoshop link`,
			"crea-piscine-after-effects-rush-00":`Liberté créative`,
			"curriculum-vitae":`Tout aussi créatif, atypique, ou particulier que vous puissiez être, il existe certains codes Votre intégration professionnelle figurant en bonne place dans les objectifs de l’école, il est naturel que nous vous intéressions à cette porte d’entrée (parmi d’autres) que constitue l’établissement de votre CV.`,
			"technical-interview-intra-api-interview":`No Description`,
			"technical-interview-sys-admin-technical-tests":`No Description`,
			"pestilence":`Second projet virus. Reprenez la base de Famine pour ajouter une méthode d'obfuscation de votre code.	`,
			"war":`Troisième projet virus. Reprenez Pestilence, et faites en sorte que votre binaire modifie sa signature au runtime.`,
			"death":`Dernier et ultime projet virus. Realiser a partir de Famine, Pestilence et War un veritable code metamorphique.`,
			"boot2root":`Challenge Securité : Cherchez en groupe les différents moyens de passer root sur l'ISO fournie en ressources.`,
			"durex":`Utilisez vos skills sur la création de daemon pour créer votre premier trojan basique.`,
			"override":`Si Rainfall vous a paru facile, voila de quoi vous donner du fil a retordre. Override est la dernière ISO de challenge qui vous demandera de partir à la recherche de failles présents dans des binaires protégés, et reconstruire ces binaires en fonction de leur comportement. `,
			"x-mansion-x-mansion-namido-d00":`First day of the Summer Bootcamp`,
			"x-mansion-x-mansion-namido-d01":`First day of the Summer Bootcamp`,
			"x-mansion-x-mansion-namido-d04-advanced":`Simulate buying a selling Bitcoin through an API!`,
			"x-mansion-x-mansion-namido-d05":`Create a personal HTML/CSS page (from PHP piscine)`,
			"x-mansion-x-mansion-namido-d06":`Code Connect 4`,
			"x-mansion-x-mansion-namido-d07":`Code Hangman`,
			"x-mansion-x-mansion-namido-d08":`Take one of the command line games and put it in a web browser with Sinatra.`,
			"x-mansion-x-mansion-namido-d04-basics":`Choose this one if you want to review what we've covered thus far.`,
			"42-piscine-c-harassment_policy":`École 42 USA is committed to providing an environment free of harassment, bullying and hazing.
			To agree to this policy:
			please download the attached file called agree. Rename it as agree.txt and add it in a directory called policy on your repository after entering login to replace the underscores.`,
			"reverse-game-of-life":`Reverse the time in the Conway's Game of Life! Write your own machine learning algorithm to predict boards in the start of the game.`,
			"check-your-dorms":`This is a Peer-2-peer review to see if an individual is still invested in 42.
			In order to stay in the Dorms, an individual must validate (1) 35 hours of log time per week (2) 1 level per month and (3) 2 exams per month. If they are failing any of the requirements at any point in time, the individual is automatically registered to this project and has one month to restore whatever gap there may be. `,
			"stairway_to_42":`Light up the way to the 2nd floor of the Lab.`,
			"wethinkcode_-joburg-first-internship":`This first step in a company is an important step in your curriculum at WeThinkCode_. This internship is an opportunity for you to discover how things work in a company and polish your adaptation and technical skills. It's also a first experience for your resume and the possibility to discover your chosen fields.`,
			"wethinkcode_-social-tech-lab":`No Description`,
			"ft_zenko":`Scality Zenko Hackathon Project`,
			"ft_vox":`ft_vox est un projet d'introduction au moteur de voxel, inspiré de minecraft, dans lequel vous devez créer un monde généré aléatoirement.`,
			"ft_ssl_rsa":`You will code your own random prime number generator and use it to make private RSA keys.`,
			"ft_ssl_md5":`You will recode part of the OpenSSL program, specifically the MD5 Hashing Algorithm.`,
			"ft_ssl_des":`You will recode part of the OpenSSL program, specifically BASE64, DES-ECB and DES-CBC.`,
			"h2s-apcsp-exam":`APCSP - Exam`,
			"h2s-apcsp-explore":`APCSP - Explore`,
			"h2s-sonicpi":`Sonic Pi is a nice library that you can you to synthesize audio tracks. Use this project as an introduction to computer music synthesis - either a remix or an original composition. Want to go further with music-related coding? If so then head on over to Map Your Own. `,
			"h2s-apcsp-create":`Build your Create project for the AP portfolio, and sign up for a peer correction to receive feedback on your project and to earn points for completing it.`,
			"hello-42-hello-terminal":`Setup, peer correction, and terminal navigation.`,
			"c-exam-alone-in-the-dark-intermediate":`A new set of exam questions once you validate the C Beginner exam. You will have to verify what you have learned when you are alone without your peers and without the internet in a limited time. To validate this project, you must validate 5 exams with a minimum score of 84.`,
			"apcsp-internet-simulator":`As a class, we will work through Code.org's Internet Simulator exercises. They are a fun way to relive the challenges that early internet developers had to solve in order to create the web as we know it today. `,
			"ft_debut":`42 prerequisites, understanding 42 culture, core values and the meaning of life`,
			"bistromatic":`Intro to Starfleet Academy`,
			"unit-factory-harassment-tolerance-policy":`UNIT Factory is committed to providing an environment free of harassment, bullying and hazing.
			To agree to this policy:
			please download the attached file called agree. Rename it as agree.txt and add it in a directory called policy on your repository after entering login to replace the underscores.`,
			"simplyelectronic":`No Description`,
			"startup-internship":`Ce premier pas en entreprise est un passage important de votre cursus 42. Ce projet est une alternative au stage pour ceux d'entre vous qui ont une âme d'entrepreneur, mais ne vous y engagez pas à la légère : il est très exigeant, et ne peut en aucun cas être une excuse pour éviter de trouver un stage. Seuls les projet,entrepreneuriaux concrets, solides et sérieux seront acceptés.`,
			"blackhole-peer-help":`No Description`,
			"grimly":`Shortest path algorithms project`,
			"shell-0":`No Description`,
			"shell-1":`No Description`,
			"shell-2":`No Description`,
			"shell-3":`No Description`,
			"ruby-00":`No Description`,
			"ruby-01":`No Description`,
			"ruby-02":`No Description`,
			"ruby-03":`No Description`,
			"ruby-04":`No Description`,
			"ruby-05":`No Description`,
			"ruby-06":`No Description`,
			"ruby-07":`No Description`,
			"projet-ruby":`No Description`,
			"web-00":`No Description`,
			"web-01":`No Description`,
			"web-02":`No Description`,
			"web-03":`No Description`,
			"web-04":`No Description`,
			"web-05":`No Description`,
			"projet-web":`No Description`,
			"h2s-project-authorship-t2":`This project is for HackHighSchool mentors to contribute to the high school curriculum by writing a project of their choice.`,
			"dslr":`Sujet proposé par l'association 42AI.
			Découvrez la Data Science à travers ce projet dans la reconstitution du Choixpeau Magique de Poudlard ! Attention, ceci n'est pas un sujet sur les appareils photos.`,
			"ccmn":`Create an application or a program that can use the wi-fi architecture and the Cisco connected mobile experiences solution. Explore network programmability and try to make real software product. Implement REST that exposes a specific service or software functionality while protecting the rest of the application. As a bonus, you will be able to create your own Spark bot “catch_me” and you can manage your app by using it`,
			"shaderpixel":`Maintenant que vous êtes à l'aise avec les objets 3D et les techniques basiques de rendu, on va parler sérieux et travailler réellement dans l'espace de la carte graphique. A vous de composer et créer les objets les plus déments grâce à la programmation de shaders.`,
			"algorithmic-puzzles":`No Description`,
			"hack-your-own-adventure":`Are you coming to 42 to work on your own idea of a project? Add your code and notes here so we can see what you find interesting, and look into adding something like it for other students to try. `,
			"h2s-project-authorship-t1":`You can get credit through this project by writing a project for the HackHighSchool students.`,
			"h2s-mentorship-project-auditing":`This is the project portal to submit solutions and feedback for projects that you complete on the H2S branch.`,
			"guimp":`L'objectif de ce projet sera pour vous de réaliser une librairie d'interface graphique. Vous devrez prouvCette librairie devra être la plus complète et modulable possible, l'objectif étant de la réutiliser dans vos futurs projets, que ce soit pour vos projets de la branche graphique ou vos autres projets du cursus.`,
			"hackerrank-university-codesprint-4":`Participate in a 3 day coding contest to sharpen your skills and represent 42! Sign up for the contest at the link under "Attachments". Set your school to "42" (not 42 Silicon Valley or 42Born2Code). We will upload points based on how many questions you answer and how far you get on the leaderboard!`,
			"userspace_digressions":`Make your own userspace init binary.`,
			"netflix-hackathon":`Netflix would like to partner with 42 on a challenge. The contestants will receive a 2-hour presentation by the Studio Technologies team at Netflix on March 9th at 11:00am. The competition will be open to a select group of individual 42 engineering students who will participate in a 3-day hackathon in Zone 3 using Ruby.`,
			"piscine-photoshop-day-00":`Cette première journée vous permettra de découvrir le logiciel Photoshop ainsi que quelques outils de base.`,
			"piscine-photoshop-day-01":`Cette journée sera entièrement consacrée à la photographie et plus spécifiquement à la retouche photo.`,
			"piscine-photoshop-day-02":`Cette journée va vous permettre d’aller encore un peu plus loin dans le domaine de la photo et d'aborder photomontage.`,
			"piscine-photoshop-day-03":`Cette journée est placée sous le signe de la créativité à l'aide du photomontage, alors c’est vraiment l’occasion de vous amuser.`,
			"piscine-photoshop-day-04":`Journée d'introduction au webdesign, et à l’UX-UI. Réflexion sur l’ergonomie et l’expérience utilisateur de votre interface.`,
			"piscine-photoshop-rush-00":`Création d'un univers global, avec son identité, ses personnages, ses décors, son ambiance etc... autour de la thématique du jeu vidéo.`,
			"object-oriented-python-programming":`No Description`,
			"atlantis-day-00":`No Description`,
			"atlantis-day-01":`No Description`,
			"atlantis-day-02":`No Description`,
			"parseltongue-piscine":`A fast-paced introduction to programming logic in Python! On each day, you will find a series of problems each prompting you to research a new concept and figure out how to use it in your code.`,
			"piscine-php-symfony":`No Description`,
			"atlantis-chatterbot":`Create a Chat bot to facilitate repetitive interactions. `,
			"multilayer-perceptron":`Sujet proposé par l'association 42AI.
			Ce projet est une introduction aux réseaux de neurones artificiels
			grâce à l'implémentation d'un multilayer perceptron.`,
			"ft_sommelier":`This project is the gateway to the machine learning branch. It will also help you become a master sommelier. `,
			"np1":`This project introduces some aspects of the Software-Defined Networking (SDN), DevOps. In the course of the work, you will have the opportunity to interact with the network equipment, try to configure it and collect data using the Southbound and Northbound APIs. You will be able to create your own product and find out, which indicators are important for service providers. The project has many opportunities to use your creativity and to write your own algorithms for calculating various indicators.`,
			"game-design-1":`Here is the two-week curriculum for game design one. In the first week, we'll focus on building a command line game. In the second week, give it a graphical interface!`,
			"game-design-2":`Sprite based game development with physics`,
			"web-development":`For Web Development, complete these three parts: (1) Runestone Interactive Fundamentals of Web Programming, then (2) The two sub-projects here "HTML_CSS" and "Javascript", and then (3) the PHP piscine.`,
			"mentor-prep-object-oriented-python-programming":`No Description`,
			"doom-nukem":`Passez à la vitesse supérieure ! Suite du Wolf3D, le Doom Nukem pousse beaucoup plus loin les possibilités du Raycasting tout en y apportant une dimension de Game design, vous allez donc devoir réaliser un vrai jeu et pour cela c’est un mélange de Doom et de Duke Nukem 3D qu’il vous faudra réaliser ! De nombreux éléments fonctionnels de base sont identiques. Ils n’ont cependant pas été implémentés de la même façon par les concepteurs des deux jeux. A vous de trouver celle qui vous conviendra et qui vous permettra d’ajouter les features demandées comme celles que vous souhaitez y voir.`,
			"hackathon-born2hack":`No Description`,
			"teen-idol":`Here is the project that for HackHighSchool mentors to feedback each other on leadership qualities. You should fill out the grading spreadsheet on everyone in your cohort, and complete two assigned corrections. `,
			"yellow-brick-road":`Tweet tweet.`,
			"taste-of-the-sea":`This project is just a flag to show that you are in the Taste of C group! Don't delete it.`,
			"h2s-project-editor-t1":`This project is meant to give 50-100 points depending on how extensively you improve the original project.`,
			"roger-skyline-1":`This subject follows Init where you have learn some of basics commands and first reflexes in syThis one will be a concrete example of the use of those commands and will let you start your own first web server.`,
			"data-mining-the-49ers":`This is the umbrella project for a set of four tutorials on data science tools!`,
			"reverse-polish-notation-calculator":`In this project, you define your own "interpreter" in Python which can read in mathematical operations as text and output the correct result.`,
			"dapp-init":`No Description`,
			"uf_bird":`This project is the introduction to the libGDX library and mobile game development for mobile devices.`,
			"apcsp":`No Description`,
			"match-box":`A competition-style puzzle for you to bend your mind around.`,
			"total-perspective-vortex":`Apprenez à utiliser les outils python pour traiter des données en grandes dimensions, et créez une interface homme machine grâce aux ondes cérébrales.`,
			"b_libft":`This first project as a student of 42 will make you consolidate your acquired pool. You will recode a number of standard C library functions, as well as other utility functions that you will reuse throughout your curriculum.`,
			"b_printf":`Are you tired of making your displays by alternating ft_putstr and ft_putnbr? You are not allowed to use printf? Recode yours! This will be an opportunity to discover a feature of the C - the variadic functions - and train you to fine management of display options. You will then have the right to use your printf in all your subsequent projects.`,
			"b_ls":`No Description`,
			"cs-joy":`Project make familiar you with Encrypted Traffic Analytics. You will be able to work with data that needed to understanding network traffic through Intraflow data, such as SPLT (Sequence of Packet Lengths and Arrival Times), byte distribution,  relative frequency for each byte in a flow, byte entropy, an initial data packet. Also, you can use and develop open source project for Encrypted Traffic Analytics - Joy.`,
			"java":`Are you coming to 42 to work on Java? An introduction to Java programming and prepare for APCSA`,
			"piscine-python-django-day00":`No Description`,
			"piscine-python-django-day01":`No Description`,
			"piscine-python-django-day02":`No Description`,
			"piscine-python-django-day03":`No Description`,
			"piscine-python-django-day04":`No Description`,
			"piscine-python-django-rush-00":`No Description`,
			"piscine-python-django-day05":`No Description`,
			"piscine-python-django-day06":`No Description`,
			"piscine-python-django-day07":`No Description`,
			"piscine-python-django-day08":`No Description`,
			"day-09":`No Description`,
			"piscine-python-django-rush-01":`No Description`,
			"blackhole-peer-helper":`No Description`,
			"plagiart":`Tired of being surrounded by static artworks in a digital world? The PlagiArt project consists of animating the artworks of Art42.Despite the title, the goal is not simply to plagiarize, but to enrich the ideas of the artist and their intentions (do your research).Your final result can be added, if you wish, to an Augmented Reality application forArt42. Your animations will then be available to visitors (to upload your rendering, visit tv.42.fr with the tag #plagiArt). Go crazy and put in practice your skills acquired during your AfterEffects Piscine.`,
			"wildcard":`This project is a gift to you: You should self-study a programming skill that is new to you, and use it to create a portfolio project which you can proudly display on your Github for the world to see. Challenge yourself and show some creativity!`,
			"hackhighschool-mentor":`These are the guidelines and assignments to work on during your time as a HackHighSchool mentor.`,
			"linkedin":`Continuons avec les codes sociaux du monde du travail difficilement contournables : Linkedin.`,
			"piscine-illustrator-day-00":`Cette première journée vous permettra de découvrir le logiciel Illustrator ainsi que quelques outils de base.`,
			"piscine-illustrator-day-01":`No Description`,
			"piscine-illustrator-day-02":`No Description`,
			"piscine-illustrator-day-04":`No Description`,
			"piscine-illustrator-day-03":`No Description`,
			"piscine-illustrator-rush00":`No Description`,
			"machine-learning-using-python":`An introduction course on Machine Learning using Python`,
			"h2s-project-editor-t2":`For this project you complete a HackHighSchool project written by another cadet - and then, you make it better!`,
			"pygame":`No Description`,
			"api-s-with-node-js":`A guided introduction to setting up Node and Express. At the end the students creates their own API `,
			"42gui":`No Description`,
		};
		super(props);
		this.state = {
		  error: null,
		  isLoaded: false,
		  items: [],
		  description: projectInfo,
		  level: null,
		};
	  }
	
	  componentDidMount() {

		fetch("https://1xudvdicd9.execute-api.us-east-1.amazonaws.com/dev/mylevel")
		.then(res => res.json())
		.then((result) => {
			var level = JSON.parse(result.body);
			this.setState({
				isLoaded: true,
				level: level
			})
		},
		(error) => {
			console.log(error);
			this.setState({
				isLoaded: true,
				error
			})
		})
		fetch("https://1xudvdicd9.execute-api.us-east-1.amazonaws.com/dev/projects/20133")
		  .then(res => res.json())
		  .then(
			(result) => {
				console.log("result", result.body);
				var t = JSON.parse(result.body)
				var projects = t.filter(element => {
					return element['project']['parent_id'] === null && element['project']['slug'].indexOf("piscine-c-")
				});
			  this.setState({
				isLoaded: true,
				items: projects,
			  });
			},
			(error) => {
				console.log(error)
			  this.setState({
				isLoaded: true,
				error
			  });
			}
		  )
	  }
	
	  render() {
		const descriptionStyle = {
			margin: '40px',
			border: '5px solid pink',
			padding: '10px',
		  };

		const levelStyle = {
			'text-align': 'center',
			'color': '#ec94b4',
			// '-webkit-animation': 'color_change 1s infinite alternate',
		}

		const { error, isLoaded, items, description, level } = this.state;
		if (error) {
		  return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
		  return <div>Loading...</div>;
		} else {
		  return (
			<div>
				<h1 style={levelStyle}>Level: {level}</h1>
			  {items.map(item => (
				<div key={item.id}>
				  <h1>{item.project.slug}</h1><div>Score : {(item.final_mark || "?") + " / 100"}</div>
				  <p style={descriptionStyle}>{description[item.project.slug] || "No Description"}</p> 
				</div>
			  ))}
			</div>
		  );
		}
	  }
}

export default Projects;
