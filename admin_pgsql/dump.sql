--
-- PostgreSQL database dump
--

-- Dumped from database version 12.19
-- Dumped by pg_dump version 12.19

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
-- Name: transaction_deposite; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction_deposite (
    id integer NOT NULL,
    placement_date date,
    placement_amount character varying(100),
    placement_rate character varying(100),
    approve1 integer DEFAULT 1,
    approve2 integer DEFAULT 1,
    approve3 integer DEFAULT 1,
    approve4 integer DEFAULT 1
);


ALTER TABLE public.transaction_deposite OWNER TO postgres;

--
-- Name: TABLE transaction_deposite; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.transaction_deposite IS 'table transaction';


--
-- Name: transaction_deposite_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transaction_deposite_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transaction_deposite_id_seq OWNER TO postgres;

--
-- Name: transaction_deposite_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transaction_deposite_id_seq OWNED BY public.transaction_deposite.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying(100),
    password character varying(100),
    roles character varying(100),
    bagian character varying(100)
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: TABLE "user"; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public."user" IS 'table user';


--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: transaction_deposite id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction_deposite ALTER COLUMN id SET DEFAULT nextval('public.transaction_deposite_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: transaction_deposite; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaction_deposite (id, placement_date, placement_amount, placement_rate, approve1, approve2, approve3, approve4) FROM stdin;
1	2024-12-12	200000	70	1	1	1	1
2	2024-12-13	200000	70	1	1	1	1
3	2024-12-14	200000	70	1	1	1	1
4	2024-12-15	200000	70	1	1	1	1
5	2024-12-16	200000	70	1	1	1	1
6	2024-12-17	200000	70	1	1	1	1
7	2024-12-18	200000	70	1	1	1	1
8	2024-12-19	200000	70	1	1	1	1
9	2024-12-20	200000	70	2	2	2	2
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (id, email, password, roles, bagian) FROM stdin;
7	deputi1@localhost.com	12345	deputiubs	unit bisnis settlement
9	asdep1@localhost.com	12345	asdepubs	unit bisnis settlement
5	deputi@localhost.com	12345	deputiubi	unit bisnis investasi
6	asdep@localhost.com	12345	asdepubi	unit bisnis investasi
\.


--
-- Name: transaction_deposite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transaction_deposite_id_seq', 9, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

