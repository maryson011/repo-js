#!/bin/sh
set -e

echo "Instalando dependências... redis"
pip install redis==2.10.5

echo "Inciando aplicação..."
python -u worker.py