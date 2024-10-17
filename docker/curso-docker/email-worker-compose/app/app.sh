#!/bin/sh
set -e

echo "Instalando dependências... bottle"
pip install bottle==0.12.13

echo "Instalando dependências... psycopg2-binary"
pip install psycopg2-binary==2.7.4

echo "Inciando aplicação... redis"
pip install redis==2.10.5

echo "Inciando aplicação..."
python -u sender.py
