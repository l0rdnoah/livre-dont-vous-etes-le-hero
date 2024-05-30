--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Debian 16.2-1.pgdg120+2)
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-04 23:02:26 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 219 (class 1259 OID 16407)
-- Name: Choix; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Choix" (
    id integer NOT NULL,
    section_depart integer,
    section_arrivee integer,
    texte character varying
);


ALTER TABLE public."Choix" OWNER TO lorenzo;

--
-- TOC entry 218 (class 1259 OID 16406)
-- Name: Choix_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Choix_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Choix_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3473 (class 0 OID 0)
-- Dependencies: 218
-- Name: Choix_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Choix_id_seq" OWNED BY public."Choix".id;


--
-- TOC entry 227 (class 1259 OID 16446)
-- Name: Combat; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Combat" (
    id integer NOT NULL,
    section_depart integer,
    section_victoire integer
);


ALTER TABLE public."Combat" OWNER TO lorenzo;

--
-- TOC entry 234 (class 1259 OID 16490)
-- Name: Combat_Enemi; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Combat_Enemi" (
    id_combat integer NOT NULL,
    id_enemi integer NOT NULL
);


ALTER TABLE public."Combat_Enemi" OWNER TO lorenzo;

--
-- TOC entry 226 (class 1259 OID 16445)
-- Name: Combat_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Combat_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Combat_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3474 (class 0 OID 0)
-- Dependencies: 226
-- Name: Combat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Combat_id_seq" OWNED BY public."Combat".id;


--
-- TOC entry 229 (class 1259 OID 16455)
-- Name: Condition_Choix; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Condition_Choix" (
    id integer NOT NULL,
    id_choix integer NOT NULL,
    min_habilite integer,
    max_habilite integer,
    min_endurance integer,
    max_endurance integer,
    objet_requis character varying,
    endurance_max boolean,
    modif_endurance integer,
    modif_habilite integer
);


ALTER TABLE public."Condition_Choix" OWNER TO lorenzo;

--
-- TOC entry 231 (class 1259 OID 16467)
-- Name: Condition_Combat; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Condition_Combat" (
    id integer NOT NULL,
    combat integer NOT NULL,
    min_des integer,
    max_des integer,
    modif_habilite integer,
    modif_endurance integer,
    modif_degat integer,
    degats integer,
    texte character varying
);


ALTER TABLE public."Condition_Combat" OWNER TO lorenzo;

--
-- TOC entry 233 (class 1259 OID 16479)
-- Name: Enemi; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Enemi" (
    id integer NOT NULL,
    nom character varying,
    endurance integer
);


ALTER TABLE public."Enemi" OWNER TO lorenzo;

--
-- TOC entry 232 (class 1259 OID 16478)
-- Name: Enemi_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Enemi_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Enemi_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3475 (class 0 OID 0)
-- Dependencies: 232
-- Name: Enemi_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Enemi_id_seq" OWNED BY public."Enemi".id;


--
-- TOC entry 217 (class 1259 OID 16398)
-- Name: Enigme; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Enigme" (
    id integer NOT NULL,
    section_depart integer,
    section_victoire integer,
    section_defaite integer,
    solution character varying
);


ALTER TABLE public."Enigme" OWNER TO lorenzo;

--
-- TOC entry 216 (class 1259 OID 16397)
-- Name: Enigme_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Enigme_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Enigme_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3476 (class 0 OID 0)
-- Dependencies: 216
-- Name: Enigme_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Enigme_id_seq" OWNED BY public."Enigme".id;


--
-- TOC entry 225 (class 1259 OID 16437)
-- Name: Objet; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Objet" (
    id integer NOT NULL,
    nom character varying,
    type character varying,
    modif_habilite integer,
    modif_endurance integer,
    modif_des integer,
    modif_degats integer,
    prix integer,
    modif_piece integer
);


ALTER TABLE public."Objet" OWNER TO lorenzo;

--
-- TOC entry 223 (class 1259 OID 16431)
-- Name: Objet_Personnage; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Objet_Personnage" (
    id_personnage integer,
    id integer NOT NULL,
    id_objet integer
);


ALTER TABLE public."Objet_Personnage" OWNER TO lorenzo;

--
-- TOC entry 235 (class 1259 OID 16569)
-- Name: Objet_Personnage_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Objet_Personnage_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Objet_Personnage_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3477 (class 0 OID 0)
-- Dependencies: 235
-- Name: Objet_Personnage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Objet_Personnage_id_seq" OWNED BY public."Objet_Personnage".id;


--
-- TOC entry 224 (class 1259 OID 16436)
-- Name: Objet_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Objet_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Objet_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3478 (class 0 OID 0)
-- Dependencies: 224
-- Name: Objet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Objet_id_seq" OWNED BY public."Objet".id;


--
-- TOC entry 220 (class 1259 OID 16415)
-- Name: Personnage; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Personnage" (
    id integer DEFAULT nextval('public."Enigme_id_seq"'::regclass) NOT NULL,
    id_utilisateur integer,
    section_actuelle integer DEFAULT 1,
    nom character varying,
    habilite integer,
    endurance integer,
    po integer,
    modif_degats integer,
    endurance_max integer
);


ALTER TABLE public."Personnage" OWNER TO lorenzo;

--
-- TOC entry 215 (class 1259 OID 16390)
-- Name: Section; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Section" (
    id integer NOT NULL,
    texte character varying,
    type_choix character varying,
    url character varying,
    objet_recup integer
);


ALTER TABLE public."Section" OWNER TO lorenzo;

--
-- TOC entry 222 (class 1259 OID 16423)
-- Name: Utilisateur; Type: TABLE; Schema: public; Owner: lorenzo
--

CREATE TABLE public."Utilisateur" (
    id integer NOT NULL,
    email character varying,
    mot_de_passe character varying
);


ALTER TABLE public."Utilisateur" OWNER TO lorenzo;

--
-- TOC entry 221 (class 1259 OID 16422)
-- Name: Utilisateur_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public."Utilisateur_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Utilisateur_id_seq" OWNER TO lorenzo;

--
-- TOC entry 3479 (class 0 OID 0)
-- Dependencies: 221
-- Name: Utilisateur_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public."Utilisateur_id_seq" OWNED BY public."Utilisateur".id;


--
-- TOC entry 228 (class 1259 OID 16454)
-- Name: condition_choix_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public.condition_choix_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.condition_choix_id_seq OWNER TO lorenzo;

--
-- TOC entry 3480 (class 0 OID 0)
-- Dependencies: 228
-- Name: condition_choix_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public.condition_choix_id_seq OWNED BY public."Condition_Choix".id;


--
-- TOC entry 230 (class 1259 OID 16466)
-- Name: condition_combat_id_seq; Type: SEQUENCE; Schema: public; Owner: lorenzo
--

CREATE SEQUENCE public.condition_combat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.condition_combat_id_seq OWNER TO lorenzo;

--
-- TOC entry 3481 (class 0 OID 0)
-- Dependencies: 230
-- Name: condition_combat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: lorenzo
--

ALTER SEQUENCE public.condition_combat_id_seq OWNED BY public."Condition_Combat".id;


--
-- TOC entry 3256 (class 2604 OID 16410)
-- Name: Choix id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Choix" ALTER COLUMN id SET DEFAULT nextval('public."Choix_id_seq"'::regclass);


--
-- TOC entry 3262 (class 2604 OID 16449)
-- Name: Combat id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Combat" ALTER COLUMN id SET DEFAULT nextval('public."Combat_id_seq"'::regclass);


--
-- TOC entry 3263 (class 2604 OID 16458)
-- Name: Condition_Choix id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Condition_Choix" ALTER COLUMN id SET DEFAULT nextval('public.condition_choix_id_seq'::regclass);


--
-- TOC entry 3264 (class 2604 OID 16470)
-- Name: Condition_Combat id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Condition_Combat" ALTER COLUMN id SET DEFAULT nextval('public.condition_combat_id_seq'::regclass);


--
-- TOC entry 3265 (class 2604 OID 16482)
-- Name: Enemi id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enemi" ALTER COLUMN id SET DEFAULT nextval('public."Enemi_id_seq"'::regclass);


--
-- TOC entry 3255 (class 2604 OID 16401)
-- Name: Enigme id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enigme" ALTER COLUMN id SET DEFAULT nextval('public."Enigme_id_seq"'::regclass);


--
-- TOC entry 3261 (class 2604 OID 16440)
-- Name: Objet id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Objet" ALTER COLUMN id SET DEFAULT nextval('public."Objet_id_seq"'::regclass);


--
-- TOC entry 3260 (class 2604 OID 16570)
-- Name: Objet_Personnage id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Objet_Personnage" ALTER COLUMN id SET DEFAULT nextval('public."Objet_Personnage_id_seq"'::regclass);


--
-- TOC entry 3259 (class 2604 OID 16426)
-- Name: Utilisateur id; Type: DEFAULT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Utilisateur" ALTER COLUMN id SET DEFAULT nextval('public."Utilisateur_id_seq"'::regclass);


--
-- TOC entry 3451 (class 0 OID 16407)
-- Dependencies: 219
-- Data for Name: Choix; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Choix" (id, section_depart, section_arrivee, texte) FROM stdin;
1	30	37	Combattre
2	30	38	Prendre la fuite
3	31	35	Continuer vers la tour
4	31	36	Ne pas visiter la tour
5	32	39	Continuer
6	1	2	Vous décidez de vous rendre directement à la forêt interdite
8	2	5	Ignorez
9	2	4	Approchez-vous
11	3	1	Economiser votre or
10	3	1	Achetez une potion de guérison (5 pièces d'or)
12	4	5	Effrayé par cet arbre qui parle vous décidez de ne pas l’écouter et continuez votre chemin
13	4	6	Tenter de répondre à l’énigme
14	5	7	Tenter d'identifier qui vous suit
15	5	8	Vous choisissez d'augmenter votre allure pour distancer ce mystérieux poursuivant
16	7	11	Vous décidez d’entamer le combat
17	7	10	Vous prenez la fuite
18	8	11	Affronter le gobelin
19	9	12	Passer par le passage souterrain
20	9	5	Passer par la forêt
21	10	11	Engager le combat
23	12	14	Aller chercher le coffre
24	12	15	Traverser la grande salle
25	13	16	Aller vers le village
26	13	17	Contourner le village
29	15	18	Allez vers la lumière bleu
30	14	15	Retourner vers la grande salle
31	15	19	Allez vers la lumière dorée
32	16	20	Dire la vérité sur votre nom et votre quête
33	16	21	Mentir
34	17	22	Prendre le bateau pour traverser le plan d’eau
35	17	23	Continuez en longeant la plage
36	20	27	Combattre et aider le village
37	20	26	 Laisser les villageois se débrouiller
38	21	28	Acheter le sifflet
39	21	28	Vous ne souhaitez rien acheter
40	23	30	Prenez l'or
41	24	31	Continuez votre chemin
42	25	32	Prenez les gantelets
43	26	17	Continuez votre chemin
44	27	33	Si vous avez moins de 6 d'habileté : votre coup le touche mais manque un point vital
45	27	34	6 et plus d'habileté : Vous transpercez son coeur, son corps tombe instantanément à terre laissant place à la peur dans les rangs ennemis
46	28	35	Combattre et aider le village
47	28	26	Ne pas aider et laisser les villageois se débrouiller
48	29	35	Entrer dans la tour
49	29	36	Contourner la tour
50	59	51	Rentrer au village
51	57	58	Combattre
52	54	57	Rentrez chez vous
53	53	37	 Retourner affronter le squelette
54	53	60	Vous préférez poursuivre votre route, espérant trouver une autre Dolipranis en chemin
55	52	55	Réveillez-vous
56	50	51	Vous avez plus de 8 d’habileté : vous parvenez à vous accrocher au pont et atteindre la falaise d’en face
57	50	1	Vous avez - de 7 d’habileté : vous lâchez prise et tombez dans les tréfonds du canyon
58	49	51	Continuez votre route
59	48	51	Continuez votre route
60	47	48	Direction La Vallée des Brumes
61	47	49	Direction Le Sentier de la Forêt Ancienne
62	47	50	Direction Le Pont Suspendu des Murmures
63	45	46	Combattre
64	44	46	Combattre
65	43	45	Suite
66	42	45	Suite
67	41	46	Combattre
68	40	43	Attaquer le château de front pour combattre le seigneur des ténèbre
70	38	52	 Arrêter-vous pour vous cacher
71	38	53	Continuez votre chemin
72	39	41	Ouvrir la porte\n
73	39	42	Visiter le reste du chateau
69	40	44	Invoquer le pouvoir du grimoire
22	34	17	Acceptez ces récompenses\n
27	35	36	vous le remerciez pour ce cadeau généreux
28	36	40	Approcher vous du chateau
\.


--
-- TOC entry 3459 (class 0 OID 16446)
-- Dependencies: 227
-- Data for Name: Combat; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Combat" (id, section_depart, section_victoire) FROM stdin;
1	33	34
2	11	13
3	18	24
4	19	25
5	22	29
6	37	54
7	58	59
8	46	47
\.


--
-- TOC entry 3466 (class 0 OID 16490)
-- Dependencies: 234
-- Data for Name: Combat_Enemi; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Combat_Enemi" (id_combat, id_enemi) FROM stdin;
1	1
2	2
3	3
4	4
5	5
6	6
7	7
8	7
\.


--
-- TOC entry 3461 (class 0 OID 16455)
-- Dependencies: 229
-- Data for Name: Condition_Choix; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Condition_Choix" (id, id_choix, min_habilite, max_habilite, min_endurance, max_endurance, objet_requis, endurance_max, modif_endurance, modif_habilite) FROM stdin;
1	18	\N	\N	\N	\N	\N	\N	-3	\N
2	22	\N	\N	\N	\N	\N	t	\N	\N
3	43	\N	\N	\N	\N	\N	\N	-1	\N
4	44	\N	5	\N	\N	\N	\N	\N	\N
5	45	6	\N	\N	\N	\N	\N	\N	\N
6	56	8	\N	\N	\N	\N	\N	\N	\N
8	57	\N	7	\N	\N	\N	\N	-100	\N
9	69	\N	\N	\N	\N	grimoire	\N	\N	\N
10	10	\N	\N	\N	\N	potion de guérison	\N	\N	\N
\.


--
-- TOC entry 3463 (class 0 OID 16467)
-- Dependencies: 231
-- Data for Name: Condition_Combat; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Condition_Combat" (id, combat, min_des, max_des, modif_habilite, modif_endurance, modif_degat, degats, texte) FROM stdin;
3	2	2	6	\N	3	\N	\N	Si vous obtenez : de 2 à 6 : le gobelin vous porte un coup de son arme,et vous perdez 3 points d'ENDURANCE; \n
7	4	2	5	\N	500	\N	\N	Si vous obtenez : de 2 à 5 : le dragon crache une flamme énorme et vous brûlez instantanément sans avoir le temps d’esquiver, perdez la totalité de votre endurance.
10	5	2	5	\N	4	\N	\N	Si vous obtenez de 2 à 5 avec deux dés, la créature frappe à coup de tentacule, perdant 4 points d'ENDURANCE .
14	6	2	3	\N	6	\N	\N	2 ou 3 : il vous tire une flèche dans les côtes, et vous perdez 6 points d'ENDURANCE
17	7	2	3	\N	100	\N	\N	Le seigneur des ténèbres pousse un cris strident vous fonce dessus avec une rapidité inhumaine et vous porte un coup en plein coeur
18	7	4	7	\N	4	\N	\N	Son épée est puissante et ses coups sont lourds, après vous avoir destabilisé il vous porte un coup qui laisse une plaie noir sur votre corps
19	7	8	10	\N	\N	\N	4	 Vos coup rapides le tranche de toutes part
20	7	11	\N	\N	\N	\N	6	Miraculeusement vous portez un coup direct dans son corps
21	8	2	3	\N	100	\N	\N	Le seigneur des ténèbres pousse un cris strident vous fonce dessus avec une rapidité inhumaine et vous porte un coup en plein coeur
22	8	4	7	\N	4	\N	\N	Son épée est puissante et ses coups sont lourds, après vous avoir destabilisé il vous porte un coup qui laisse une plaie noir sur votre corps
23	8	8	10	\N	\N	\N	4	 Vos coup rapides le tranche de toutes part
24	8	11	\N	\N	\N	\N	6	Miraculeusement vous portez un coup direct dans son corps
2	1	7	50	0	0	0	4	7 et plus :  infligez -4 d’endurance à l’ennemi\n
6	3	7	50	\N	\N	\N	3	7 ou plus  : vous blessez l’araignée qui perd 3 points d'ENDURANCE.
11	5	6	50	\N	\N	\N	100	Si vous obtenez de 6 à 12, vous repoussez la créature avec votre arme, gagnant 2 pièces d'or.
1	1	2	6	0	3	0	0	2 à 6 : le chef ennemi vous frappe, perdez 3 d’endurances
4	2	7	50	\N	\N	\N	3	7 à 12 : vous blessez le gobelin qui perd 3 points d'ENDURANCE.
5	3	2	6	\N	3	\N	\N	2 à 6 : l’araignée vous porte un coup de ses mandibules,et vous perdez 3 points d'ENDURANCE;
8	4	6	8	\N	3	\N	\N	6 à 8 : le dragon vous porte un coup de griffe,et vous perdez 3 points d'ENDURANCE;
9	4	9	50	\N	\N	\N	4	9 ou plus  : vous blessez le dragon qui perd 4 points d'ENDURANCE.
15	6	4	6	\N	3	\N	\N	4 à 6 : il vous tire une flèche dans votre jambe droite,et vous perdez 3 points 
16	6	7	50	\N	\N	\N	3	7 à 12 : vous portez un coup d'épée au squelette qui perd 3 points d'ENDURANCE.
\.


--
-- TOC entry 3465 (class 0 OID 16479)
-- Dependencies: 233
-- Data for Name: Enemi; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Enemi" (id, nom, endurance) FROM stdin;
1	Chef Gobelin	15
2	Gobelin	9
3	Araignée	12
4	Dragon	21
5	Créature marine	20
6	Squelette	6
7	Le Seigneur des ténèbres	30
\.


--
-- TOC entry 3449 (class 0 OID 16398)
-- Dependencies: 217
-- Data for Name: Enigme; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Enigme" (id, section_depart, section_victoire, section_defaite, solution) FROM stdin;
1	6	9	5	Le vent
2	55	45	56	la mort
\.


--
-- TOC entry 3457 (class 0 OID 16437)
-- Dependencies: 225
-- Data for Name: Objet; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Objet" (id, nom, type, modif_habilite, modif_endurance, modif_des, modif_degats, prix, modif_piece) FROM stdin;
1	poignard	equipement	\N	\N	\N	\N	\N	\N
2	epee	equipement	\N	\N	\N	\N	\N	\N
3	armure legere	equipement	\N	\N	\N	\N	\N	\N
4	gourde d'eau	equipement	\N	\N	\N	\N	\N	\N
6	hache	equipement	\N	\N	\N	2	\N	\N
7	sifflet	equipement	\N	\N	\N	\N	5	\N
10	gantelet enflammes	equipement	\N	\N	\N	3	\N	\N
11	grimoire	equipement	\N	\N	\N	\N	\N	\N
5	potions de guérison	consommable	\N	5	\N	\N	5	\N
9	livre ancien	consommable	\N	5	\N	\N	\N	\N
8	piece	piece	\N	\N	\N	\N	\N	3
\.


--
-- TOC entry 3455 (class 0 OID 16431)
-- Dependencies: 223
-- Data for Name: Objet_Personnage; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Objet_Personnage" (id_personnage, id, id_objet) FROM stdin;
22	65	1
22	66	2
22	67	3
22	68	4
23	69	1
23	70	2
23	71	3
23	72	4
24	73	1
24	74	2
24	75	3
24	76	4
25	77	1
25	78	2
25	79	3
25	80	4
26	81	1
26	82	2
26	83	3
26	84	4
27	85	1
27	86	2
27	87	3
27	88	4
28	89	1
28	90	2
28	91	3
28	92	4
29	93	1
29	94	2
29	95	3
29	96	4
23	108	10
30	109	1
30	110	2
30	111	3
30	112	4
23	113	10
31	114	1
31	115	2
31	116	3
31	117	4
23	118	10
32	119	1
20	56	1
20	57	2
20	58	3
20	59	4
21	60	1
21	61	2
21	62	3
21	63	4
32	120	2
32	121	3
32	122	4
33	123	1
33	124	2
33	125	3
33	126	4
34	127	1
34	128	2
34	129	3
34	130	4
35	131	1
35	132	2
35	133	3
35	134	4
36	135	1
36	136	2
36	137	3
36	138	4
37	139	1
37	140	2
37	141	3
37	142	4
38	143	1
38	144	2
38	145	3
38	146	4
39	147	1
39	148	2
39	149	3
39	150	4
40	151	1
40	152	2
40	153	3
40	154	4
33	155	10
33	156	10
33	157	9
33	158	9
33	159	9
33	160	11
23	161	10
41	162	1
41	163	2
41	164	3
41	165	4
34	167	11
34	168	11
34	169	11
34	170	11
34	171	11
34	172	11
34	173	11
34	174	11
34	175	11
34	176	11
34	177	11
34	178	11
34	179	11
34	180	11
34	181	11
34	182	11
42	183	1
42	184	2
42	185	3
42	186	4
43	187	1
43	188	2
43	189	3
43	190	4
44	191	1
44	192	2
44	193	3
44	194	4
45	195	1
45	196	2
45	197	3
45	198	4
46	200	1
46	201	2
46	202	3
46	203	4
47	204	1
47	205	2
47	206	3
47	207	4
48	209	1
48	210	2
48	211	3
48	212	4
41	218	11
41	219	11
48	220	11
48	221	11
48	222	11
30	223	11
48	224	11
48	225	11
48	226	11
48	227	11
48	228	11
48	229	11
48	230	11
48	231	11
48	232	11
48	233	11
48	234	11
48	235	11
48	236	11
48	237	11
48	238	11
48	239	11
48	240	11
48	241	11
48	242	11
48	243	11
48	244	11
48	245	11
49	246	1
49	247	2
49	248	3
49	249	4
50	250	1
50	251	2
50	252	3
50	253	4
51	254	1
51	255	2
51	256	3
51	257	4
52	265	1
52	266	2
52	267	3
52	268	4
53	269	1
53	270	2
53	271	3
53	272	4
41	281	10
54	282	1
54	283	2
54	284	3
54	285	4
54	286	8
42	287	11
55	288	1
55	289	2
55	290	3
55	291	4
56	292	1
56	293	2
56	294	3
56	295	4
56	296	11
45	301	11
45	302	5
56	303	5
58	304	1
58	305	2
58	306	3
58	307	4
58	308	11
41	309	9
58	310	5
59	311	1
59	312	2
59	313	3
59	314	4
59	315	11
59	316	5
\.


--
-- TOC entry 3452 (class 0 OID 16415)
-- Dependencies: 220
-- Data for Name: Personnage; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Personnage" (id, id_utilisateur, section_actuelle, nom, habilite, endurance, po, modif_degats, endurance_max) FROM stdin;
22	16	1	de	6	24	8	0	24
21	16	1	de	8	24	8	0	24
31	16	1	cd	6	29	8	0	29
26	16	1	d	8	25	8	0	25
41	17	3	ahhhhh	8	300	0	0	31
38	19	1	jean	8	27	8	0	27
52	22	2	eded	9	300	0	0	31
37	19	1	TEST3	6	27	8	0	27
29	17	13	pipi	4	24	8	0	24
53	22	2	eded	9	29	8	0	29
36	16	2	"a'g	6	27	8	0	27
47	22	1	zfzfzf	4	2	0	0	28
32	16	1	sdv	8	30	8	0	30
35	16	4	de	6	26	8	0	26
24	19	1	Paul	4	26	8	0	26
25	19	1	Paul2	8	27	8	0	27
28	20	1	michel	9	26	8	0	26
59	22	1	egg	9	0	8	0	30
20	16	50	aefz	7	2	1000	0	29
50	22	2	zfzf	6	300	0	0	32
34	16	13	tgt	6	16	0	0	26
23	17	5	caca	9	28	0	0	28
43	22	1	de	8	25	0	0	27
39	19	1	pierre	6	300	0	0	28
44	22	1	ed	8	25	0	0	27
58	22	2	fzzfz	7	300	0	0	26
56	22	1	caca	6	300	0	0	27
49	22	1	eded	8	300	0	0	28
54	18	55	Ronan	5	25	0	0	28
51	22	1	zrzgf	9	300	0	0	29
42	22	1	hugo	5	300	0	0	27
27	19	1	paul3	5	29	8	0	29
55	22	8	zefff	4	28	8	0	28
45	22	1	zfzfz	4	300	0	0	27
46	22	1	zrfz	6	25	0	0	25
48	22	1	egreg	8	300	0	0	22
30	15	6	t	6	25	0	0	25
33	17	46	prout	7	28	8	0	28
57	22	4	zfzfzfz	8	28	8	0	28
40	16	1	ded	5	300	0	0	26
\.


--
-- TOC entry 3447 (class 0 OID 16390)
-- Dependencies: 215
-- Data for Name: Section; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Section" (id, texte, type_choix, url, objet_recup) FROM stdin;
38	Vous courez pour vous échapper du squelette. Vous voyez au loin une petite maison abandonnée.	choix_multiples	http://localhost:3100/img/38.png	\N
15	Vous marchez à travers ce palais souterrain, les décorations serpentent le long des colonnes jusque dans la pénombre du plafond. Au loin, à peine visible, deux embouchures dont une lumière s’échappe une émet une lumière bleu l’autre une lumière dorée plus chaleureuse.	choix_multiples	http://localhost:3100/img/15.png	\N
30	En suivant la plage vous bifurquez sur un chemin dans une forêt, vous découvrez une clairière où la Dolipranis pousse abondamment. En ramassant la plante, le bruit d’une corde qui se tend se fait entendre. Ni une ni deux vous faites une roulade sur le côté qui vous permet d’esquiver la flèche. En vous retournant vous apercevez un squelette en armure doté d’une arbalète, surement un soldat du seigneur des ténèbres.	choix_multiples	http://localhost:3100/img/30.png	\N
31	Enfin vous voyez la sortie, en poussant la porte la lumière du jour vous fait mal au yeux, quelques secondes plus tard vous contempler l’endroit qui se présente devant vous, un marécage boueux surplombé par une forêt brumeuse qui abrite une tour biscornue.	choix_multiples	http://localhost:3100/img/31.png	\N
32	Dans les profondeurs de la terre les nains avaient aussi leurs petits plaisirs, car vous découvrez des sources chaudes, vous décidez d’y faire une pause bien méritée	choix_simple	http://localhost:3100/img/32.png	\N
33	Le chef gobelin se retourne, enragé il ne prend pas la peine de vous dévisager qu’il lève son énorme massue parsemée de pics.	combat	http://localhost:3100/img/33.png	\N
34	Après un combat intense, vous êtes célébré comme un héros. Le chef du village organise un grand banquet à votre honneur et vous offre :\nUne armure renforcée qui réduit de 1 les dégâts subis et 10 pièces d'or.\n	choix_simple\n	http://localhost:3100/img/34.png	\N
35	Vous arrivez en bas de la tour, elle est sombre mais en poussant la porte vous découvrez avec surprise un vieil homme assis sur un fauteuil, il se retourne et commence à vous parlez, “Bonjour jeune homme, que me vaut votre venue ?” Il semble digne de confiance, vous lui expliquez donc la vérité quant à votre quête.”Hummm je vois dit-il, j’ai moi même voulue combattre le seigneur sombre autrefois, et j’ai les moyens nécessaire pour le faire sceller.” il vous tend un vieux grimoire rouge orné de dorures représentant des flammes. “prenez le, je suis trop faible pour m’en servir désormais, c’est le grimoire des feux éternels, avec celui ci vous pourrez entièrement sceller le château du seigneur des ténèbre”	choix_simple\n	http://localhost:3100/img/35.png	\N
39	Après cette courte pause, le chemin se poursuit avec un long escalier taillé dans la pierre. l'écho de vos pas résonne le long des marches. Une fois arrivé en haut, l'escalier débouche sur un mur, un cul de sac, au pied duquel gît un tas de cadavres. Après réflexion vous vous souvenez que les légendes racontent que les portes des nains sont invisibles. De toutes vos forces vous poussez le mur et débouchez sur un couloir sombre. Les murs sont éclairés par des chandeliers en fin de vie et devant vous se dresse une porte géante.	choix_multiples	http://localhost:3100/img/39.png	\N
40	A une centaine de mètre de mettre de la forteresse deux choix s’offre à vous : 	choix_multiples\n	http://localhost:3100/img/40.png	\N
41	Vous ouvrez la porte géante, devant vous s’étend un long tapis noir au motif argentés, la salle est froide et seche, une odeur de mort se répend et au fond se trouve un grand throne fait à base de cranes en tout genre. Vous vous approchez avec bravoure en tenant fermement votre arme en main. Une fois à quelques mêtres du throne un nuage noir apprait sur celui ci, puis en disparaissant il laisse place à une énorme ombre à l’apparence humaine qui fait deux fois votre taille. Il est équipé d’une grande armure sombre et sous sa capuche l’obscurité est telle qu’il est impossible de voir son visage, s’il existe. Vous l’observer avec attention, et il se met à parler : “ZEHAHAHAHA ainsi tu es arrivé jusqu’ici, et tu ose venir me défier dans mon château.” Sa voix est grave et son ton fait hérisser vos poils. “Estime toi heureux car tu te feras tuer de la main du seigneur des ténèbres en personne.” De son pommeau il dégaine une longue épée assez fine, ses décorations sont fracturées et rongées par le temps mais le fil émet une lueur qui semble pouvoir aspirer n’importe quelle étoile. C’est le combat final, tenez vous prêt !!!	combat\n	http://localhost:3100/img/41.png	\N
42	En avançant dans les couloirs vous tombez nez à nez à un groupe de gardes squelette, et sans que vous ayez le temps de vous échapper ils vous embarquent avec eux.	choix_simple\n	http://localhost:3100/img/42.png	\N
43	Vous approchez du château, il semble abandonné depuis des siècles, il n’y a aucun signe de vie. Au moment où vous atteignez la porte qui succède le pont levis, celle-ci s'ouvre d'elle-même. Vous êtes observé ! En avançant dans les couloirs vous tombez nez à nez à un groupe de gardes squelette, et sans que vous ayez le temps de vous échapper ils vous embarquent avec eux.	choix_simple\n	http://localhost:3100/img/43.png	\N
1	Vous vous tenez au milieu du village de Kemper, la mission du prêtre clairement gravée dans votre esprit. Votre quête pour trouver la plante rare capable d’éradiquer la Peste Noire, la Dolipranis, commence aujourd'hui. Sur votre épaule, un sac contenant vos maigres possessions : un poignard, une épée, une armure légère, une gourde d'eau fraîche et 8 pièces d'or.	choix_multiples	http://localhost:3100/img/1.png	\N
3	Le marché bourdonne d'activité. Les marchands vantent leurs marchandises, des armures brillantes aux potions mystérieuses. Vous avez <nb_pieces> pièces d'or.	choix_multiples	http://localhost:3100/img/3.png	5
4	Vous approchant du vieil arbre vous remarquez que le visage semble vous suivre du regard, puis soudain il se met à parler. “J’ai patiemment attendu votre venu jeune voyageur… Vous cherchez quelque chose… et j’ai un moyen de rendre votre quête plus rapide… mais attention, pas moins difficile pour autant… pour cela vous devrez résoudre une énigme…”Sa voix est lente et grave comme si elle reflétait des centaines d’années de sagesse.	choix_multiples	http://localhost:3100/img/4.png	\N
5	En progressant sur votre route, vous remarquez à maintes reprises une présence mouvante parmi les buissons, évoquant la présence d'une créature. Il semble que quelqu'un ou quelque chose vous piste !	choix_multiples	http://localhost:3100/img/5.png	\N
9	“Huhuhu… c’est exact… vous avez résolu mon énigme… désormais, voici mon cadeau…” Tout à coup l’arbre se mit à trembler, les feuilles frémirent alors que les oiseaux qui y vivent partent chantant la catastrophe. Le visage d’écorce laisse place à un orifice, grandissant jusqu’à devenir un passage qui s’enfonce dans les profondeurs de la terre.	choix_multiples	http://localhost:3100/img/9.png	\N
11	C’est l’heure du combat vous vous regardez yeux dans les yeux afin de savoir qui fera le premier pas.	combat	http://localhost:3100/img/11.png	\N
45	Les squelettes vous font passer par maints couloirs et escaliers, jusqu’à atteindre la salle du trône. Un des squelette se met à parler “Le seigneur vous attend”. Les portes souvrent, devant vous s’étend un long tapis noir au motif argentés, la salle est froide et seche, une odeur de mort se répend et au fond se trouve un grand siège fait à base de cranes en tout genre, une ombre s’emble y être assis. Soudain l’ombre bouge et un rire glaciale se fait entendre :  “ZEHAHAHAHA ainsi tu es arrivé jusqu’ici, et tu ose venir me défier dans mon château.” Sa voix est grave et son ton fait hérisser vos poils. “Estime toi heureux car tu te feras tuer de la main du seigneur des ténèbres en personne.” De son pommeau il dégaine une longue épée assez fine, ses décorations sont fracturées et rongées par le temps mais le fil émet une lueur qui semble pouvoir aspirer n’importe quelle étoile. Les squelettes vous rendent votre équipement, c’est un combat loyal. \nLe combat final va commencer, tenez vous prêt !!!\n	choix_simple\n	http://localhost:3100/img/45.png	\N
46	L’heure du combat a sonnée, vous tenez votre arme en main et regardez le vide de son visage avec concentration :	combat	http://localhost:3100/img/46.png	\N
47	Vous donnez un dernier coup d’épée dans le crâne de l’ennemi il pousse cri de douleur “AAAAAAHHHH”. L’ombre s’évapore et l’armure qu’elle maintient tombe au sol en morceaux. En fouillant son cadavre vous trouvez une Dolipranis. Il ne reste plus qu’à retourner au village. pour cela 3 chemins s’offrent à vous : 	choix_multiples\n	http://localhost:3100/img/47.png	\N
48	Le route est sombre et froide, mais aucun ennemi ne vient vous barrer la route.	choix_simple\n	http://localhost:3100/img/48.png	\N
49	Le sentier dégage une atmosphère apaisante, votre retour est accompagné par des fleurs multicolores qui bordes les ruisseaux et les oiseaux chantent votre retour.	choix_simple	http://localhost:3100/img/49.png	\N
8	Suite à votre effort pour accélérer le pas, la fatigue commence à se faire sentir (perte de 3 points d'endurance) et le mystérieux suiveur ne vous a pas lâché. Soudain, un gobelin furieux, armé d'une dague primitive, jaillit des buissons devant vous. Trop épuisé pour envisager une échappée, le combat semble inévitable. 	choix_multiples	http://localhost:3100/img/8.png	\N
10	Vous faites une tentative d'évasion, mais votre ennemi parvient à vous atteindre à la jambe d'un coup rapide. La situation vous force à rester et à affronter le combat, car la fuite n'est désormais plus une option.	choix_multiples	http://localhost:3100/img/10.png	\N
2	La forêt s'étend devant vous, sombre et menaçante. Les arbres semblent vous observer, leurs branches chuchotant dans le vent. Les branches craquent et chacun de vos pas en direction du cœur de la forêt vous coupe un peu plus le souffle. Soudain, devant vous, se dresse un vieux chêne au sein duquel se dessine un visage humain. Devant lui se trouve une potion qui attire votre attention (+ 1 potion d'endurance)	choix_multiples	http://localhost:3100/img/2.png	5
16	Vous vous approchez du village l’air curieux, lorsque du haut d’une tour vous entendez une voix “Halte là !!! Qui êtes-vous et qu’est ce qui vous amène au village des branches, Konokaka”, c’est le guet du village. Il vous parle d’un ton sec mais ne paraît pas hostile pour autant.	choix_multiples	http://localhost:3100/img/16.png	\N
17	En poursuivant votre chemin vous devinez au loin ce qui s’avère être une plage. Vous vous approchez et découvrez une petite embarcation coloré par les algues. Le vent est frais mais agréable et les clapotis des vagues chantent en harmonie avec celui des mouettes. A l’horizon se dessinent des terres, elles sont trop éloignées pour savoir ce qu’elles abritent.\n	choix_multiples	http://localhost:3100/img/17.png	\N
20	Vous parlez au guet et lui expliquer la raison de votre venue. Il est très compréhensif quant à votre quête et vous explique qu’il on eu affaire à des cas de peste dans le village et en sont venu à bout en brûlant les malades. Vous le regardez choqué par les moyens employés, mais en voyant votre visage il vous dit qu’il est prêt à vous présenter au chef du village car ce problèmes les concerne aussi et ils ne souhaitent pas voir plus de morts.\nSoudain un son de cor se fait entendre et le guet regarde au loin puis fait sonner l’alerte.\n	choix_multiples	http://localhost:3100/img/20.png	\N
18	En vous approchant de la lumière bleue vous entendez une faible mélodie. Une fois la porte atteinte vous découvrez une petite salle éclairée par des bougies à la lueur bleutée, Le plafond est parsemé de toiles géantes. Vous faites un pas de plus dans la salle et le pavé s’enfonce sous votre pied. Tout à coup la mélodie s’arrête, les bougies s'éteignent et un claquètement se fait entendre, dans la pénombre, vous sentez comme une présence derrière vous et devinez une forme d’arachnide faisant plus ou moins votre taille. Pas le choix, il faut combattre !\n	combat	http://localhost:3100/img/18.png	\N
19	Vous entrez dans une grande salle surplombée par de grands lustres enflammés. vous continuez votre route mais vous sentez un mouvement qui fait frémir les flammes. après quelques minutes un dragon apparait devant vous, il est très petit pour un dragon d'à peine six mètres de long, surement un jeune dragon. Malgré son jeune âge son regard est hostile et il ne vous laissera pas partir comme tous les dragons il a une une vitesse de fou, et des réflexes identique à sa vitesse. il va falloir combattre.\n	combat	http://localhost:3100/img/19.png	\N
57	 La tombée de la nuit vous contraint à poursuivre votre voyage dans l'obscurité. Soudain, une vague de froid glacial vous enveloppe, et, à travers une brume légère, vous apercevez une imposante silhouette s'approcher. Alors qu'elle se fait de plus en plus proche, vous reconnaissez avec une clarté terrifiante le Seigneur des Ténèbres. Face à cette rencontre inévitable, le combat semble être votre seule option.	choix_simple	http://localhost:3100/img/57.png	\N
23	En longeant la plage, vous trouvez un coffre semi-enterré. À l'intérieur, vous découvrez 3 pièces d'or.\nPrenez l'or, puis allez à la section 30.\n	choix_multiples	http://localhost:3100/img/23.png	8
51	Enfin, vous voilà de retour à Kimper, tous les habitants chantent en cœur vos louanges alors que vous vous dirigez vers le prêtre afin de lui donner la fleur. Celui-ci prépare dans un grand chaudron un mélange de plusieurs ingrédients et bien sûr il ajoute à cela la Dolipranis. Après quelques heures, il déverse la substance dans la rivière qui traverse les rues. Tous les villageois se précipitent sur les rives pour boire le miraculeux breuvage. C’est ainsi que la peste fut éliminée du royaume de Nionla et par la même occasion le terrible Seigneur des ténèbres fut défait.	fin	http://localhost:3100/img/51.png	\N
52	Vous vous trouvez dissimulé dans la petite maison depuis environ dix minutes lorsque, à travers la fenêtre, vous apercevez une horde de squelettes s'approcher rapidement, se dirigeant droit vers votre cachette. L'évasion n'est plus une option. La horde envahit l'habitation et, dans la confusion, l'un d'eux vous assomme avec une massue.	choix_simple	http://localhost:3100/img/52.png	\N
53	 Vous avancez, l'esprit tourmenté par la fleur que vous n'avez pas pu obtenir. L'incertitude vous pèse :	choix_multiples	http://localhost:3100/img/53.png	\N
54	Une fois le squelette vaincu, vous vous emparez avec soulagement de la Dolipranis, la clé pour sauver votre village de la maladie. Sans tarder, vous faites demi-tour pour entamer le chemin du retour.	choix_simple\n	http://localhost:3100/img/54.png	\N
55	Vous reprenez conscience, entravé, au cœur de la grande salle du château du Seigneur des Ténèbres. Autour de vous, des squelettes se tiennent en cercle, et devant vous, l'imposante silhouette du Seigneur des Ténèbres vous fait face. Il vous soumet une énigme : une réponse correcte vous donnera l'opportunité de l'affronter en duel pour la précieuse fleur ; un échec, et vous serez condamné à être consumé par les flammes.	enigme	http://localhost:3100/img/55.png	\N
56	La figure sombre du Seigneur des Ténèbres s'assombrit encore davantage, un rire froid emplissant l'air. "Tu as échoué," annonce-t-il simplement avant de lever la main. Les flammes s'élèvent autour de vous, la chaleur intense vous enveloppant alors que votre vision se brouille. C'est la fin de votre quête, ici, dans les flammes du château du Seigneur des Ténèbres.	fin	http://localhost:3100/img/56.png	\N
58	 L’heure du combat a sonnée, vous tenez votre arme en main et regardez le vide de son visage avec concentration :	combat	http://localhost:3100/img/58.png	\N
22	Vous prenez le bateau pour traverser l'étendue d'eau. Au milieu du trajet, une créature marine gigantesque émerge des profondeurs. Vous devez combattre :\n	combat	http://localhost:3100/img/22.png	\N
13	Victorieux, vous continuez votre route. Vous croisez en chemin une voie pavée et en levant le regard une clairière vous apparaît, elle abrite quelques maisons en bois ornées de fleurs blanches et bleues.	choix_multiples	http://localhost:3100/img/13.png	\N
44	Ouvrant le grimoire des feux éternels, une aura mystique en émane, enveloppant l'air d'une chaleur réconfortante. Les pages, illuminées de runes anciennes, semblent danser sous vos yeux, chaque mot pulsant d'une énergie vivante. En parcourant les incantations, une sensation de puissance vous envahit, revitalisant chaque fibre de votre être. C'est comme si le grimoire lui-même vous transférait une parcelle de son essence infinie. Lorsque vous fermez le livre, vous vous sentez renaître, avec 10 points d'endurance restaurés, prêt à affronter les défis qui vous attendent avec une vigueur renouvelée. Après un bruit sourd et vif telle une rafale, le pouvoir du grimoire disparaît laissant place à une énorme ombre à l’apparence humaine qui fait deux fois votre taille. Il est équipé d’une grande armure sombre et sous sa capuche l’obscurité est telle qu’il est impossible de voir son visage, s’il existe. Vous l'observez avec attention, et il se met à parler : “C’est donc toi !!!” dit il d’un air furieux “Je pensais y aller doucement quand je te croiserai, mais après un tel affront je vais en finir au plus vite”. Il s’avance vers vous d’un pas lent mais pesant, de son pommeau il dégaine une longue épée assez fine, ses décorations sont fracturées et rongées par le temps mais le fil émet une lueur qui semble pouvoir aspirer n’importe quelle étoile. Le combat final va commencer !!! 	choix_simple\n	http://localhost:3100/img/44.png	\N
21	Vous décidez de ne pas dire la vérité au guet. "Je suis un simple voyageur, en quête de nouvelles terres," dites-vous d'une voix assurée. Le guet vous observe un moment, puis acquiesce. "Très bien, mais soyez prudent. Des créatures étranges ont été aperçues dans les environs." En vous éloignant, vous croisez un marchand ambulant qui vous propose d'acheter des objets :\nUn sifflet qui peut appeler des créatures alliées pour 5 pièces d'or.\n	choix_multiples	http://localhost:3100/img/21.png	\N
6	“Vous avez donc choisi de répondre à mon énigme… Voilà une sage décision…La voici donc : Sans voix, il crie… sans ailes, il voltige… sans dents, il mord… sans bouche, il murmure… Qui suis-je ?”	enigme	http://localhost:3100/img/6.png	\N
7	Faisant mine de rien vous continuez votre marche et tout à coup lorsque la présence se fait de nouveau ressentir vous dégainez votre épée et tranchez d’un coup vif le feuillage. Devant vous apparaît alors un gobelin de petite taille, l’air vicieux et non moins surpris d’avoir été découvert. C’est alors qu’il sort à son tour une dague grossière et court vers vous.	choix_multiples	http://localhost:3100/img/7.png	\N
12	Bien que la galerie soit toujours plus profonde, des gisements de mithril  reflètent le peu de lumière émise par les champignons. En suivant la seule voie possible, la galerie semble prendre fin et déboucher sur une gigantesque salle soutenue par d'énormes piliers sculptés de motifs anguleux. Sur l’embouchure de la porte un message écrit dans une langue oubliée, puis sa traduction en langue commune juste en dessous “Bienvenue amis dans le royaume des nains, le grand Durin vous accueille au sein de sa maison,  les mines de Mario”. Durin, ce nom vous fit quelque chose. Sur votre droite se trouve une petite salle bien décorée et abritant un coffre.\n	choix_multiples	http://localhost:3100/img/12.png	\N
14	Une fois à l'intérieur la salle dégage une aura étouffante, on dirait que personne n’y a mis depuis des millénaires. Le coffre est petit mais joliment décoré, de petites gemmes arborent fièrement ses dorures. il n’y a pas de serrure seulement un message “Voici l’héritage du peuple nain, les enfants de Durin, le premier roi de sous la terre, si vous trouvez ce coffre c’est que l'assaut est un échec. Ainsi nous vous supplions d'accepter notre requête, prenez son contenu et vengez le peuple nain du Seigneur des ténèbres.”\nVous ouvrez le coffre et trouvez une hache gravée de caractères inconnus, elle est parfaitement adaptée à votre taille et son poids est étrangement équilibré. (bonus de +2 à la somme de chaque lancer de dés)\n	choix_multiples	http://localhost:3100/img/14.png	6
24	Après un combat acharné contre l'araignée, vous découvrez derrière sa toile un livre ancien. Le livre contient un sort de guérison. Apprenez le sort, ce qui vous permet de restaurer 5 points d'ENDURANCE une fois.	choix_multiples	http://localhost:3100/img/24.png	9
25	Si vous parvenez à vaincre le jeune dragon, il vous révèle, dans un dernier souffle, l'emplacement d'une cache contenant :\nDes gantelets enflammés qui rajoutent 3 point de dégats à chaque attaque	choix_multiples	http://localhost:3100/img/25.png	10
27	Sous vos yeux, des gobelins attaquent en groupe le village en tirant des salves de flèches enflammées. Tous les villageois partent combattre. à l’arrière des troupes ennemies se trouve un grand et gros gobelin. Se doit être le chef, s’il est éliminé le reste des assaillants arrêteront surement le combat. Ainsi vous vous approchez de lui et tentez de le tuer par surprise.\n	choix_multiples	http://localhost:3100/img/27.png	\N
28	Soudain un son de cor se fait entendre et le guet regarde au loin puis fait sonner l’alerte.	choix_multiples	http://localhost:3100/img/28.png	\N
26	Vous choisissez de ne pas intervenir, ce qui vous permet de continuer votre quête sans interférence. Cependant, vous perdez 1 point d'endurance dû au poids de la culpabilité.\n	choix_multiples	http://localhost:3100/img/26.png	\N
29	Après cette rude traversée, vous posez enfin le pied à terre, la plage sur laquelle vous débarquez est bordée d’une forêt dissimulée derrière un épais voile de brume. Par delà la cime des arbres se dresse une vieille tour biscornue à tel point que seul de la magie peut la faire tenir.	choix_multiples	http://localhost:3100/img/29.png	\N
36	Au loin, au sommet d’une dune de terre surplombant la forêt vous apercevez un château, ses murs sombres soutiennent de pourpre toitures, le peu de décoration présente est faite de pics et de gargouilles, à sa vue tout votre corps frissonne, mais c’est bel et bien votre destination. Le château du seigneur des ténèbres, là bas vous êtes sûr de trouver ce que vous cherchez.	choix_simple	http://localhost:3100/img/36.png	11
37	 Le squelette armé d'une arbalète se dresse devant vous. Son regard vide fixe le vôtre, prêt pour l'affrontement.	combat	http://localhost:3100/img/37.png	\N
50	 Vous arrivez devant le pont, celui-ci vacille au gré de la brise. Vous faites quelques pas sur celui ci et une fois arriver au centre la corde qui le maintient se détache vous précipitant vers le fond.	choix_condition	http://localhost:3100/img/50.png	\N
59	Le Seigneur des Ténèbres, dans un dernier souffle, recule et s'effondre, vaincu. La menace qui pesait sur votre monde est enfin écartée. Vous prenez un moment pour reprendre votre souffle, conscient du poids qui vient de se lever de vos épaules. Le château, autrefois lieu de terreur, semble maintenant moins menaçant, comme libéré d'une emprise maléfique. Vous vous approchez du corps vaincu et, fouillant dans une de ses poches, vous découvrez une Dolipranis. Vous la saisissez avant de prendre le chemin du retour vers chez vous.	choix_simple	http://localhost:3100/img/59.png	\N
60	Après avoir marché pendant de nombreuses heures, vous choisissez de vous reposer dans une auberge à la nuit tombée. Toutefois, pendant que vous dormez, l'établissement est pris d'assaut par des voleurs spécialisés dans le trafic d'organes. Tragiquement, vous perdez la vie dans votre sommeil suite à leur intervention.	fin	http://localhost:3100/img/60.png	\N
\.


--
-- TOC entry 3454 (class 0 OID 16423)
-- Dependencies: 222
-- Data for Name: Utilisateur; Type: TABLE DATA; Schema: public; Owner: lorenzo
--

COPY public."Utilisateur" (id, email, mot_de_passe) FROM stdin;
15	noah@beaugosse.fr	$2a$10$zAFmrju/FRigmfnGLtNAJeh5kpeweNyL.sTwpPBMMib1fN1XdM1zC
1	toto@gmail.com	$2a$10$zAFmrju/FRigmfnGLtNAJeh5kpeweNyL.sTwpPBMMib1fN1XdM1zC
16	dog@gmail.com	$2a$10$ihd3cYkz4QDSCi1mROiVxO2qE/2OzSlh4Yfd8v7C/co8T8CJLR2nu
17	caca@pipi.fr	$2a$10$UcRYmfHzd2fy28Fie4OSgO5Ip7UrYxZnJ2fDn4L.N3ljtrxO5OB6.
18	ronan@ronan.ronan	$2a$10$4Z3alYBHmkXJVSgdnmL3WukF8jmNJwFPy7wcsfIo.Go.xRt3mekCO
19	moi@gmail.com	$2a$10$uruZT7yMJlK.KZV5ttn/aOUQllifJuDudx5Q5KHkJlg8oqnjOMzAG
20	test1@gmail.com	$2a$10$oWxyRIqP5dUgVsYC5BKO3uJYRFmuu3KDMbxXCKOBeXvgpkoCzfQre
21	noah@beaugosse.fr	$2a$10$t6FSEfAkzzIWtuyMCUnhkeqkiGBjISvCKgqfUgunYdBgy5ISR/0z6
22	cochon@gmail.com	$2a$10$BjgLWrLddrIaysSyQ5laAeq8ZMAroh1CQISfpDQxa.33IB8OBpSxi
\.


--
-- TOC entry 3482 (class 0 OID 0)
-- Dependencies: 218
-- Name: Choix_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Choix_id_seq"', 73, true);


--
-- TOC entry 3483 (class 0 OID 0)
-- Dependencies: 226
-- Name: Combat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Combat_id_seq"', 8, true);


--
-- TOC entry 3484 (class 0 OID 0)
-- Dependencies: 232
-- Name: Enemi_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Enemi_id_seq"', 7, true);


--
-- TOC entry 3485 (class 0 OID 0)
-- Dependencies: 216
-- Name: Enigme_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Enigme_id_seq"', 59, true);


--
-- TOC entry 3486 (class 0 OID 0)
-- Dependencies: 235
-- Name: Objet_Personnage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Objet_Personnage_id_seq"', 317, true);


--
-- TOC entry 3487 (class 0 OID 0)
-- Dependencies: 224
-- Name: Objet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Objet_id_seq"', 11, true);


--
-- TOC entry 3488 (class 0 OID 0)
-- Dependencies: 221
-- Name: Utilisateur_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public."Utilisateur_id_seq"', 22, true);


--
-- TOC entry 3489 (class 0 OID 0)
-- Dependencies: 228
-- Name: condition_choix_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public.condition_choix_id_seq', 10, true);


--
-- TOC entry 3490 (class 0 OID 0)
-- Dependencies: 230
-- Name: condition_combat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: lorenzo
--

SELECT pg_catalog.setval('public.condition_combat_id_seq', 24, true);


--
-- TOC entry 3271 (class 2606 OID 16414)
-- Name: Choix Choix_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Choix"
    ADD CONSTRAINT "Choix_pkey" PRIMARY KEY (id);


--
-- TOC entry 3289 (class 2606 OID 16541)
-- Name: Combat_Enemi Combat_Enemi_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Combat_Enemi"
    ADD CONSTRAINT "Combat_Enemi_pkey" PRIMARY KEY (id_combat, id_enemi);


--
-- TOC entry 3281 (class 2606 OID 16453)
-- Name: Combat Combat_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Combat"
    ADD CONSTRAINT "Combat_pkey" PRIMARY KEY (id);


--
-- TOC entry 3283 (class 2606 OID 16555)
-- Name: Condition_Choix Condition_Choix_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Condition_Choix"
    ADD CONSTRAINT "Condition_Choix_pkey" PRIMARY KEY (id);


--
-- TOC entry 3285 (class 2606 OID 16557)
-- Name: Condition_Combat Condition_Combat_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Condition_Combat"
    ADD CONSTRAINT "Condition_Combat_pkey" PRIMARY KEY (id);


--
-- TOC entry 3287 (class 2606 OID 16548)
-- Name: Enemi Enemi_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enemi"
    ADD CONSTRAINT "Enemi_pkey" PRIMARY KEY (id);


--
-- TOC entry 3269 (class 2606 OID 16405)
-- Name: Enigme Enigme_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enigme"
    ADD CONSTRAINT "Enigme_pkey" PRIMARY KEY (id);


--
-- TOC entry 3277 (class 2606 OID 16577)
-- Name: Objet_Personnage Objet_Personnage_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Objet_Personnage"
    ADD CONSTRAINT "Objet_Personnage_pkey" PRIMARY KEY (id);


--
-- TOC entry 3279 (class 2606 OID 16444)
-- Name: Objet Objet_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Objet"
    ADD CONSTRAINT "Objet_pkey" PRIMARY KEY (id);


--
-- TOC entry 3273 (class 2606 OID 16509)
-- Name: Personnage Personnage_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Personnage"
    ADD CONSTRAINT "Personnage_pkey" PRIMARY KEY (id);


--
-- TOC entry 3267 (class 2606 OID 16396)
-- Name: Section Section_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Section"
    ADD CONSTRAINT "Section_pkey" PRIMARY KEY (id);


--
-- TOC entry 3275 (class 2606 OID 16430)
-- Name: Utilisateur Utilisateur_pkey; Type: CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Utilisateur"
    ADD CONSTRAINT "Utilisateur_pkey" PRIMARY KEY (id);


--
-- TOC entry 3294 (class 2606 OID 16530)
-- Name: Choix FK_CHOIX_SECTION_ARRIVE; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Choix"
    ADD CONSTRAINT "FK_CHOIX_SECTION_ARRIVE" FOREIGN KEY (section_arrivee) REFERENCES public."Section"(id) NOT VALID;


--
-- TOC entry 3295 (class 2606 OID 16535)
-- Name: Choix FK_CHOIX_SECTION_DEPART; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Choix"
    ADD CONSTRAINT "FK_CHOIX_SECTION_DEPART" FOREIGN KEY (section_depart) REFERENCES public."Section"(id) NOT VALID;


--
-- TOC entry 3302 (class 2606 OID 16542)
-- Name: Combat_Enemi FK_COMBATENNEMI_COMBAT; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Combat_Enemi"
    ADD CONSTRAINT "FK_COMBATENNEMI_COMBAT" FOREIGN KEY (id_combat) REFERENCES public."Combat"(id) NOT VALID;


--
-- TOC entry 3303 (class 2606 OID 16549)
-- Name: Combat_Enemi FK_COMBATENNEMI_ENNEMI; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Combat_Enemi"
    ADD CONSTRAINT "FK_COMBATENNEMI_ENNEMI" FOREIGN KEY (id_enemi) REFERENCES public."Enemi"(id) NOT VALID;


--
-- TOC entry 3291 (class 2606 OID 16525)
-- Name: Enigme FK_ENIGME_SECTION_DEFAITE; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enigme"
    ADD CONSTRAINT "FK_ENIGME_SECTION_DEFAITE" FOREIGN KEY (section_defaite) REFERENCES public."Section"(id) NOT VALID;


--
-- TOC entry 3292 (class 2606 OID 16515)
-- Name: Enigme FK_ENIGME_SECTION_DEPART; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enigme"
    ADD CONSTRAINT "FK_ENIGME_SECTION_DEPART" FOREIGN KEY (section_depart) REFERENCES public."Section"(id) NOT VALID;


--
-- TOC entry 3293 (class 2606 OID 16520)
-- Name: Enigme FK_ENIGME_SECTION_VICTOIRE; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Enigme"
    ADD CONSTRAINT "FK_ENIGME_SECTION_VICTOIRE" FOREIGN KEY (section_victoire) REFERENCES public."Section"(id) NOT VALID;


--
-- TOC entry 3297 (class 2606 OID 16578)
-- Name: Objet_Personnage FK_OBJETPERSONNAGE_OBJET; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Objet_Personnage"
    ADD CONSTRAINT "FK_OBJETPERSONNAGE_OBJET" FOREIGN KEY (id_objet) REFERENCES public."Objet"(id) NOT VALID;


--
-- TOC entry 3298 (class 2606 OID 16583)
-- Name: Objet_Personnage FK_OBJETPERSONNAGE_PERSONNAGE; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Objet_Personnage"
    ADD CONSTRAINT "FK_OBJETPERSONNAGE_PERSONNAGE" FOREIGN KEY (id_personnage) REFERENCES public."Personnage"(id) NOT VALID;


--
-- TOC entry 3296 (class 2606 OID 16510)
-- Name: Personnage FK_Personnage_Utilisateur; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Personnage"
    ADD CONSTRAINT "FK_Personnage_Utilisateur" FOREIGN KEY (id_utilisateur) REFERENCES public."Utilisateur"(id) NOT VALID;


--
-- TOC entry 3290 (class 2606 OID 16604)
-- Name: Section FK_SECTION_OBJET; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Section"
    ADD CONSTRAINT "FK_SECTION_OBJET" FOREIGN KEY (objet_recup) REFERENCES public."Objet"(id) NOT VALID;


--
-- TOC entry 3299 (class 2606 OID 16493)
-- Name: Combat fk_combat_section; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Combat"
    ADD CONSTRAINT fk_combat_section FOREIGN KEY (section_depart) REFERENCES public."Section"(id) NOT VALID;


--
-- TOC entry 3300 (class 2606 OID 16461)
-- Name: Condition_Choix fk_condition_choix_choix; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Condition_Choix"
    ADD CONSTRAINT fk_condition_choix_choix FOREIGN KEY (id_choix) REFERENCES public."Choix"(id) NOT VALID;


--
-- TOC entry 3301 (class 2606 OID 16473)
-- Name: Condition_Combat fk_condition_combat_combat; Type: FK CONSTRAINT; Schema: public; Owner: lorenzo
--

ALTER TABLE ONLY public."Condition_Combat"
    ADD CONSTRAINT fk_condition_combat_combat FOREIGN KEY (combat) REFERENCES public."Combat"(id) NOT VALID;


-- Completed on 2024-04-04 23:02:26 UTC

--
-- PostgreSQL database dump complete
--

