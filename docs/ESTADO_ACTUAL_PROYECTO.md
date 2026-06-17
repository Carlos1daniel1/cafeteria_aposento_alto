# ESTADO ACTUAL DEL PROYECTO

Fecha: Junio 2026

## Proyecto

Sistema Integral de Cafetería - Templo Aposento Alto

---

# PRIORIDAD ACTUAL

FASE 1 - Sistema de Turnos Multimedia

Objetivo:

Tener listo el software que correrá en la Raspberry Pi para:

* Mostrar multimedia.
* Mostrar llamados de cajas.
* Reproducir audio de llamados.
* Recibir solicitudes desde ESP32.
* Funcionar sin internet.

---

# ESTADO ACTUAL

## Completado

* VS Code instalado.
* Python instalado.
* Git instalado.
* GitHub configurado.
* Repositorio creado.
* Flask instalado.
* Primer servidor Flask funcionando.
* Primer login visual funcionando.
* Documentación inicial creada.

---

# DECISIÓN DE ARQUITECTURA

Todo el sistema vivirá dentro del mismo proyecto:

cafeteria_aposento_alto

La Fase 1 y la Fase 2 compartirán la misma aplicación Flask.

---

# SIGUIENTE OBJETIVO

Construir MVP de Fase 1.

Debe incluir:

1. Pantalla principal TV.
2. Rotación multimedia.
3. Cola de llamados.
4. Audio de llamados.
5. API para ESP32.
6. Simulación de cajas.
7. Preparado para Raspberry Pi.

---

# FASE 2

Ya existe diseño funcional completo.

Incluye:

* Usuarios.
* Roles.
* Eventos.
* Inventario.
* Ventas.
* Multimedia.
* Reportes.
* Tipo de cambio.

La implementación queda pausada temporalmente hasta finalizar MVP de Fase 1.

---

# SI RETOMAMOS ESTE PROYECTO EN OTRA SESIÓN

Continuar desde:

FASE 1 → Sistema de Turnos Multimedia

NO continuar desde MariaDB.

NO continuar desde Inventario.

NO continuar desde Ventas.

La prioridad es dejar funcionando:

ESP32 → Raspberry → Pantalla → Audio.
