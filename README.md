# TEST TECHNIQUE DAG, BACK-END

## POUR TESTER MON CODE :

- Copier .env.example en .env et renseigner ses données.
- npm i
- Ouvrir MySQL, se placer sur la BDD indiquée sur le .env (test_technique_dag). Puis lancer les requêtes contenues dans resetDB.sql
- Tester les routes API : soit avec fichier collection Insomnia placé à la racine du repot. Sinon les voici :
  - Récupérer une app et ses courses : http://localhost:5000/applicationandcourses/1
  - Créer une course : http://localhost:5000/courses avec un contenu JSON : { "nom": "Foulées blanches", "date_creation": "1999-01-03", "application_id": 2}
  - Créer une application : http://localhost:5000/applications avec un contenu JSON : {"nom": "Appli chrono Tag Heuer", "num_version": "1.9"}

## CONSIGNES :

TECHNO: NODEJS (EXPRESS)
Créer une application qui possède des courses ainsi qu’une base de données SQL (mySQL ou SqLite)

Créer deux tables « course » et « application :

- Une application est définie au minimum par un nom et un numéro de version.
- Une course est rattachée à une application et doit avoir au minimum un nom et une date de création.

Objectif:
⁃ Créer une application
⁃ Créer des courses liées à une application;
⁃ Récupérer une application et ses courses.
Bonus: TypeScript
