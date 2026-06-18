from flask import Flask, render_template, jsonify
import os
import threading

app = Flask(__name__)

cola_llamados = []

def reproducir_audio(caja):

    import subprocess

    texto = f"Atencion por favor. Pasar a caja {caja}."

    subprocess.run(
    [
    "/home/cafeteria/piper-bin/piper/piper",
    "--model",
    "/home/cafeteria/piper/voces/es_MX-claude-high.onnx",
    "--output_file",
    "/tmp/anuncio.wav"
    ],
    input=texto.encode("utf-8")
    )

    subprocess.run(["aplay", "/tmp/anuncio.wav"])


@app.route("/")
def login():
    return render_template("login.html")

@app.route("/tv")
def tv():
    return render_template("tv.html")

@app.route("/simulador")
def simulador():
    return render_template("simulador.html")

@app.route("/llamar/<int:caja>")
def llamar(caja):

    global cola_llamados

    cola_llamados.append(caja)

    threading.Thread(
    target=reproducir_audio,
    args=(caja, )
    ).start()

    return jsonify({
        "ok": True,
        "caja": caja,
        "cola": len(cola_llamados)
    })

@app.route("/estado")
def estado():

    global cola_llamados

    if len(cola_llamados) == 0:

        return jsonify({
            "caja": None
        })

    caja = cola_llamados.pop(0)

    return jsonify({
        "caja": caja
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
