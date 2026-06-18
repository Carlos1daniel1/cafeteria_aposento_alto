import subprocess
import sys

caja = sys.argv[1]

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
