#!/bin/sh
set -e
echo "Instalando dependências..."
pip install bottle==0.12.13 
echo "Instalando dependências..."
pip install psycopg2-binary==2.7.4
echo "Inciando aplicação..."
python -u sender.py