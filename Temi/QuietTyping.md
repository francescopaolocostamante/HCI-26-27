# QuietTyping
---


## Definizione del problema

### Problema da risolvere:
Con l'intensificarsi dell'utilizzo degli LLM nelle operazioni quotidiane può capitare di condividere involontariamente informazioni sensibili (nomi, numeri di telefono, documentazione sanitaria, documenti lavorativi, etc). L'uso frequente porta a una desensibilizzazione e una minore attenzione rispetto alle informazioni condivise con l'AI, aumentando i rischi alla privacy dell’utente.

### Utenti target:
Gli utenti che iniziano a utilizzare l'AI in maniera intensiva.

### Missione del progetto:
Progettare un sistema che indichi all'utente il rischio a cui si espone condividendo informazioni sensibili/private con gli LLM e suggerisce alternative sicure.

### Rischi e tensioni iniziali:
1. La condivisione indiscriminata di dati sensibili che possono danneggiare la privacy dell'utente.
2. La condivisione di documenti lavorativi sensibili che possono danneggiare l'azienda e chi li ha condivisi. 
3. Gli utenti non sono sempre consapevoli dei rischi legati alla condivisione di informazioni personali con gli LLM.

### Rischi del progetto
1. Nel trade-off privacy-performance, aumentare la privacy riduce la performance dei modelli di AI.
2. è critica la gestione delle informazioni private è la trasparenza nel comunicare all'utente come queste vengano gestite.
3. Chi prima poteva essere riluttante a utilizzare gli LLM per certi task, potrebbe risultare invogliato ad un uso eccessivo.

## Definizione delle personas

### Utente giovane (adolescente)

### Utente lavoratore

### Utente universitario


## Tasks

### Suggerire mitigation
Utente inserisce informazioni confidenziali e il sistema evidenzia, suggerendo delle possibili alternative.

### Caricamento di documenti 
Al caricamento di documenti, il sistema li scannerizza in base alla tipologia di documento e, in caso contenga informazioni rischiose, evidenzia all'utente il documento, permettendo di entrare nel dettaglio e vedere il perchè dell'allert e come ci è arrivato.

### Contenuti malevoli
Il sistema scansiona la pagina e allerta l'utente in caso trovi i seguenti contenuti malevoli: 
- Attacchi omografici e typosquatting
- Prompt injections
- ...


## Possibili interfacce

### Estensione browser

### Applicazione separata

### Chatbot
