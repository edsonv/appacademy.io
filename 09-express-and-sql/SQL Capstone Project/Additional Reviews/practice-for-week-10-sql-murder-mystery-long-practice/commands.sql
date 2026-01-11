SELECT * FROM crime_scene_report
WHERE type = "murder"
AND date = 20180115
AND city = "SQL City";

-- 20180115	murder	Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".	SQL City

-- First witness
SELECT * FROM person
WHERE address_street_name LIKE ("Northwestern Dr")
ORDER BY address_number DESC;

-- id	name	license_id	address_number	address_street_name	ssn
-- 14887	Morty Schapiro	118009	4919	Northwestern Dr	111564949

-- Second witness
SELECT * FROM person
WHERE name LIKE ("Annabel%")
AND address_street_name LIKE ("Franklin Ave");

-- id	name	license_id	address_number	address_street_name	ssn
-- 16371	Annabel Miller	490173	103	Franklin Ave	318771143

-- Interview first witness
SELECT * FROM interview
WHERE person_id = 14887;

-- person_id	transcript
-- 14887	I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".

-- Interview second witness
SELECT * FROM interview
WHERE person_id = 16371;

-- person_id	transcript
-- 16371	I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.

--Insights from first witness's interview
SELECT * FROM drivers_license
WHERE plate_number LIKE ("H42W%");

-- id	age	height	eye_color	hair_color	gender	plate_number	car_make	car_model
-- 183779	21	65	blue	blonde	female	H42W0X	Toyota	Prius

SELECT * FROM person
WHERE license_id = 183779;

-- id	name	license_id	address_number	address_street_name	ssn
-- 78193	Maxine Whitely	183779	110	Fisk Rd	137882671

SELECT * FROM get_fit_now_check_in
JOIN get_fit_now_member ON get_fit_now_check_in.membership_id = get_fit_now_member.id 
JOIN person ON person_id = person.id
WHERE person.name LIKE ("Maxi%");

-- membership_id	check_in_date	check_in_time	check_out_time	id	person_id	name	membership_start_date	membership_status	id	name	license_id	address_number	address_street_name	ssn
-- 71BOE	20170121	604	1085	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20171009	767	995	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20170802	807	822	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20170303	208	209	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20170930	559	987	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20171224	1111	1155	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20170131	44	179	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639
-- 71BOE	20171031	971	1169	71BOE	61721	Maximo Oliver	20170705	gold	61721	Maximo Oliver	746478	3917	Sever Circle	269395639

--Insights from second witness's interview
SELECT * FROM person
JOIN get_fit_now_member ON person.id = person_id
JOIN get_fit_now_check_in ON get_fit_now_member.id = membership_id
WHERE get_fit_now_check_in.check_in_date = 20180109;

-- id	name	license_id	address_number	address_street_name	ssn	id	person_id	name	membership_start_date	membership_status	membership_id	check_in_date	check_in_time	check_out_time
-- 15247	Shondra Ledlow	108978	2906	Chuck Dr	492143109	X0643	15247	Shondra Ledlow	20170521	silver	X0643	20180109	957	1164
-- 28073	Zackary Cabotage	402017	3823	S Winthrop Ave	367741547	UK1F2	28073	Zackary Cabotage	20170818	silver	UK1F2	20180109	344	518
-- 55662	Sarita Bartosh	556026	1031	Legacy Pointe Blvd	564780417	XTE42	55662	Sarita Bartosh	20170524	gold	XTE42	20180109	486	1124
-- 10815	Adriane Pelligra	952073	948	Emba Ave	243639527	1AE2H	10815	Adriane Pelligra	20170816	silver	1AE2H	20180109	461	944
-- 83186	Burton Grippe	915564	484	Lemcrow Way	426280783	6LSTG	83186	Burton Grippe	20170214	gold	6LSTG	20180109	399	515
-- 31523	Blossom Crescenzo	737886	1245	Ruxshire St	753962462	7MWHJ	31523	Blossom Crescenzo	20180309	regular	7MWHJ	20180109	273	885
-- 92736	Carmen Dimick	890722	2965	Kilmaine Circle	622279052	GE5Q8	92736	Carmen Dimick	20170618	gold	GE5Q8	20180109	367	959
-- 28819	Joe Germuska	173289	111	Fisk Rd	138909730	48Z7A	28819	Joe Germuska	20160305	gold	48Z7A	20180109	1600	1730
-- 67318	Jeremy Bowers	423327	530	Washington Pl, Apt 3A	871539279	48Z55	67318	Jeremy Bowers	20160101	gold	48Z55	20180109	1530	1700
-- 16371	Annabel Miller	490173	103	Franklin Ave	318771143	90081	16371


-- People who has checked in at the gym on January 9th, 2018 with a membership number starting with "48Z"
SELECT * FROM get_fit_now_check_in
JOIN get_fit_now_member ON get_fit_now_check_in.membership_id = get_fit_now_member.id 
JOIN person ON person_id = person.id
WHERE get_fit_now_check_in.check_in_date = 20180109
AND get_fit_now_member.id LIKE ("48Z%")

-- membership_id	check_in_date	check_in_time	check_out_time	id	person_id	name	membership_start_date	membership_status	id	name	license_id	address_number	address_street_name	ssn
-- 48Z7A	20180109	1600	1730	48Z7A	28819	Joe Germuska	20160305	gold	28819	Joe Germuska	173289	111	Fisk Rd	138909730
-- 48Z55	20180109	1530	1700	48Z55	67318	Jeremy Bowers	20160101	gold	67318	Jeremy Bowers	423327	530	Washington Pl, Apt 3A	871539279

-- People with a car that has a license plate including "H42W"
SELECT * FROM person
JOIN drivers_license ON license_id = drivers_license.id
WHERE plate_number LIKE ("%H42W%");

-- id	name	license_id	address_number	address_street_name	ssn	id	age	height	eye_color	hair_color	gender	plate_number	car_make	car_model
-- 51739	Tushar Chandra	664760	312	Phi St	137882671	664760	21	71	black	black	male	4H42WR	Nissan	Altima
-- 67318	Jeremy Bowers	423327	530	Washington Pl, Apt 3A	871539279	423327	30	70	brown	brown	male	0H42W2	Chevrolet	Spark LS
-- 78193	Maxine Whitely	183779	110	Fisk Rd	137882671	183779	21	65	blue	blonde	female	H42W0X	Toyota	Prius

-- Get murderer interview transcript
SELECT person.name, transcript FROM interview
JOIN person ON interview.person_id = person.id
WHERE person.name = "Jeremy Bowers";

-- name	transcript
-- Jeremy Bowers	I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017.

-- Get the brain behind the murder
SELECT person.name, income.annual_income, facebook_event_checkin.event_name, facebook_event_checkin.date, COUNT(facebook_event_checkin.date) FROM person
JOIN income ON person.ssn = income.ssn
JOIN drivers_license ON person.license_id = drivers_license.id
JOIN facebook_event_checkin ON person.id = facebook_event_checkin.person_id
WHERE drivers_license.car_make = "Tesla"
AND drivers_license.car_model = "Model S"
AND facebook_event_checkin.date LIKE ("201712%")

-- name	annual_income	event_name	date	COUNT(facebook_event_checkin.date)
-- Miranda Priestly	310000	SQL Symphony Concert	20171229	3

-- Jeremy Bowers was hired by Miranda Priestly to commit murder