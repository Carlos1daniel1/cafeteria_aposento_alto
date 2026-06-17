from flask import Flask, render_template, jsonify

app = Flask(__name__)

cola_llamados = []

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
    app.run(debug=True)