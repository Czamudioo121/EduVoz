# EduVoz - Aplicación Web con Reconocimiento de Voz para Educación Preescolar

**Prototipo de aplicación web empleando reconocimiento de voz para la identificación de dígitos y letras en 2° de preescolar**

## 📑 Índice General

### **1. [Contexto y Problemática del Proyecto](#1-contexto-y-problemática-del-proyecto)**
   - 1.1 [Impacto de la Pandemia COVID-19 en Educación Preescolar](#11-impacto-de-la-pandemia-covid-19-en-educación-preescolar)
     - 1.1.1 [Estadísticas de Abandono Escolar](#111-estadísticas-de-abandono-escolar)
     - 1.1.2 [Brecha Digital y Educativa](#112-brecha-digital-y-educativa)
     - 1.1.3 [Desafíos del Aprendizaje Remoto](#113-desafíos-del-aprendizaje-remoto)
   - 1.2 [Carencias en Herramientas Educativas Digitales](#12-carencias-en-herramientas-educativas-digitales)
     - 1.2.1 [Falta de Recursos en Español](#121-falta-de-recursos-en-español)
     - 1.2.2 [Limitaciones del Reconocimiento de Voz Infantil](#122-limitaciones-del-reconocimiento-de-voz-infantil)

### **2. [Objetivos y Alcance del Proyecto](#2-objetivos-y-alcance-del-proyecto)**
   - 2.1 [Objetivo General](#21-objetivo-general)
   - 2.2 [Objetivos Específicos](#22-objetivos-específicos)
   - 2.3 [Alcance y Limitaciones](#23-alcance-y-limitaciones)
   - 2.4 [Beneficiarios del Proyecto](#24-beneficiarios-del-proyecto)

### **3. [Investigación y Metodología](#3-investigación-y-metodología)**
   - 3.1 [Estado del Arte](#31-estado-del-arte)
     - 3.1.1 [Análisis Comparativo de Aplicaciones Existentes](#311-análisis-comparativo-de-aplicaciones-existentes)
     - 3.1.2 [Diferenciación Tecnológica](#312-diferenciación-tecnológica)
   - 3.2 [Marco Teórico Aplicado](#32-marco-teórico-aplicado)
     - 3.2.1 [Fundamentos de Educación Infantil](#321-fundamentos-de-educación-infantil)
     - 3.2.2 [Aprendizaje Basado en Juegos](#322-aprendizaje-basado-en-juegos)
     - 3.2.3 [Programa de Estudios SEP](#323-programa-de-estudios-sep)
   - 3.3 [Investigación de Campo](#33-investigación-de-campo)
     - 3.3.1 [Entrevistas con Docentes](#331-entrevistas-con-docentes)
     - 3.3.2 [Encuestas a Tutores](#332-encuestas-a-tutores)
     - 3.3.3 [Análisis de Factibilidad](#333-análisis-de-factibilidad)

### **4. [Diseño UI/UX Especializado para Niños](#4-diseño-uiux-especializado-para-niños)**
   - 4.1 [Principios de Diseño Infantil](#41-principios-de-diseño-infantil)
     - 4.1.1 [Psicología del Color en Niños](#411-psicología-del-color-en-niños)
     - 4.1.2 [Navegación Simplificada](#412-navegación-simplificada)
     - 4.1.3 [Retroalimentación Inmediata](#413-retroalimentación-inmediata)
   - 4.2 [Proceso de Diseño](#42-proceso-de-diseño)
     - 4.2.1 [Wireframes y Mockups](#421-wireframes-y-mockups)
     - 4.2.2 [Prototipado en Figma](#422-prototipado-en-figma)
     - 4.2.3 [Validación con Usuarios](#423-validación-con-usuarios)

### **5. [Tecnologías y Arquitectura](#5-tecnologías-y-arquitectura)**
   - 5.1 [Stack Tecnológico](#51-stack-tecnológico)
     - 5.1.1 [Backend: Python y Flask](#511-backend-python-y-flask)
     - 5.1.2 [Frontend: HTML5, CSS3, JavaScript](#512-frontend-html5-css3-javascript)
     - 5.1.3 [Reconocimiento de Voz: DeepSpeech](#513-reconocimiento-de-voz-deepspeech)
     - 5.1.4 [Base de Datos: MariaDB](#514-base-de-datos-mariadb)
   - 5.2 [Arquitectura del Sistema](#52-arquitectura-del-sistema)
     - 5.2.1 [Patrón MVC](#521-patrón-mvc)
     - 5.2.2 [Componentes Principales](#522-componentes-principales)
     - 5.2.3 [Flujo de Datos](#523-flujo-de-datos)

### **6. [Implementación Técnica](#6-implementación-técnica)**
   - 6.1 [Desarrollo del Backend](#61-desarrollo-del-backend)
     - 6.1.1 [Servidor Flask](#611-servidor-flask)
     - 6.1.2 [Integración con DeepSpeech](#612-integración-con-deepspeech)
     - 6.1.3 [Sistema de Autenticación](#613-sistema-de-autenticación)
   - 6.2 [Desarrollo del Frontend](#62-desarrollo-del-frontend)
     - 6.2.1 [Interfaz Responsiva](#621-interfaz-responsiva)
     - 6.2.2 [Captura de Audio](#622-captura-de-audio)
     - 6.2.3 [Comunicación AJAX](#623-comunicación-ajax)
   - 6.3 [Base de Datos](#63-base-de-datos)
     - 6.3.1 [Esquema Relacional](#631-esquema-relacional)
     - 6.3.2 [Integridad Referencial](#632-integridad-referencial)

### **7. [Pruebas y Validación](#7-pruebas-y-validación)**
   - 7.1 [Pruebas Técnicas](#71-pruebas-técnicas)
   - 7.2 [Validación con Usuarios](#72-validación-con-usuarios)
   - 7.3 [Métricas de Usabilidad](#73-métricas-de-usabilidad)

### **8. [Despliegue y Configuración](#8-despliegue-y-configuración)**
   - 8.1 [Infraestructura en Google Cloud](#81-infraestructura-en-google-cloud)
   - 8.2 [Configuración de Producción](#82-configuración-de-producción)
   - 8.3 [Instalación Local](#83-instalación-local)

---

## 1. Contexto y Problemática del Proyecto

### 1.1 Impacto de la Pandemia COVID-19 en Educación Preescolar

#### 1.1.1 Estadísticas de Abandono Escolar
El contexto de desarrollo de EduVoz surge de una problemática educativa crítica: **el 94.7% de estudiantes preescolares no concluyeron el ciclo 2019-2020** debido a la suspensión de clases presenciales causada por la pandemia COVID-19. Esta situación generó una brecha educativa significativa que afectó particularmente a los niños en edad preescolar, quienes se encuentran en un período crítico para el desarrollo de la conciencia fonológica.

#### 1.1.2 Brecha Digital y Educativa
La transición forzada hacia modalidades de educación a distancia evidenció limitaciones importantes:

- **Carencia de herramientas digitales educativas** adaptadas al contexto hispanohablante
- **Falta de recursos interactivos** para el desarrollo de habilidades básicas
- **Limitaciones geográficas y tecnológicas** que impiden el acceso equitativo a la educación
- **Ausencia de seguimiento personalizado** del progreso estudiantil

#### 1.1.3 Desafíos del Aprendizaje Remoto
Los desafíos identificados incluyen:

- Dificultad para mantener la atención de niños pequeños en entornos virtuales
- Falta de retroalimentación inmediata en el aprendizaje
- Limitaciones para evaluar el progreso individual
- Necesidad de herramientas que involucren a las familias en el proceso educativo

### 1.2 Carencias en Herramientas Educativas Digitales

#### 1.2.1 Falta de Recursos en Español
El análisis del estado del arte reveló que **la mayoría de aplicaciones educativas infantiles carecen de reconocimiento de voz en español**, limitando su eficacia en el contexto sociolingüístico mexicano. Las aplicaciones existentes como ABCmouse e IXL no ofrecen funcionalidades de reconocimiento de voz, mientras que otras como Starfall y Read-Along están diseñadas principalmente para el inglés.

#### 1.2.2 Limitaciones del Reconocimiento de Voz Infantil
Las tecnologías existentes presentan limitaciones específicas:

- **Baja precisión** en el reconocimiento de voces infantiles
- **Algoritmos básicos** que no aprovechan arquitecturas avanzadas de redes neuronales
- **Falta de adaptación** al habla de niños hispanohablantes
- **Ausencia de retroalimentación pedagógicamente apropiada**

## 2. Objetivos y Alcance del Proyecto

### 2.1 Objetivo General
**Desarrollar un prototipo de aplicación web interactiva para niños de segundo grado de preescolar, que utilice reconocimiento de voz para fomentar la práctica de la pronunciación de letras y dígitos**.

### 2.2 Objetivos Específicos

1. **Implementar modelo de reconocimiento de voz** basado en DeepSpeech adaptado al habla infantil en español
2. **Desarrollar aplicación web responsiva** utilizando HTML, CSS, JavaScript y Python
3. **Crear base de datos relacional** para gestión de usuarios, grupos y seguimiento de progreso
4. **Integrar retroalimentación multimedia** con audio y elementos visuales inmediatos
5. **Desarrollar módulo de seguimiento** del progreso estudiantil con visualizaciones gráficas
6. **Implementar sistema de gestión de grupos** para docentes y administradores
7. **Realizar pruebas de usabilidad** y validación con usuarios finales

### 2.3 Alcance y Limitaciones

**Alcance del proyecto:**
- Reconocimiento de letras del alfabeto español (A-Z)
- Reconocimiento de dígitos (0-9)
- Sistema multi-rol (Administrador, Docente, Tutor, Alumno)
- Seguimiento personalizado del progreso
- Interfaz adaptada para niños de 4-5 años

**Limitaciones:**
- Enfocado exclusivamente en 2° grado de preescolar
- Reconocimiento limitado a letras y números individuales
- Requiere conexión a internet para funcionamiento completo
- Optimizado para navegadores modernos

### 2.4 Beneficiarios del Proyecto

- **Niños de 4-5 años**: Usuarios principales que practican pronunciación
- **Tutores/Padres**: Monitoreo del progreso y apoyo en casa
- **Docentes**: Herramientas de gestión y seguimiento grupal  
- **Instituciones educativas**: Recurso digital complementario

## 3. Investigación y Metodología

### 3.1 Estado del Arte

#### 3.1.1 Análisis Comparativo de Aplicaciones Existentes

Se realizó un análisis exhaustivo de aplicaciones educativas infantiles existentes, evaluando sus características técnicas y funcionalidades:

| Aplicación | Reconocimiento de Voz | Idioma | IA Implementada |
|------------|----------------------|---------|-----------------|
| **ABCmouse** | No | Inglés | Algoritmos de recomendación |
| **Starfall** | Sí | Inglés | Análisis básico de datos |
| **Read-Along** | Sí | 11 idiomas (incluye español) | RNN/DeepSpeech |
| **IXL** | No | Inglés | DNN para personalización |
| **EduVoz** | **Sí** | **Español** | **CNN + RNN** |

#### 3.1.2 Diferenciación Tecnológica

EduVoz se diferencia por:

- **Reconocimiento de voz específico para español** mexicano
- **Arquitectura CNN + RNN avanzada** para procesamiento de habla infantil  
- **Integración con curriculum SEP** para preescolar
- **Interfaz diseñada específicamente** para niños de 4-5 años
- **Sistema de seguimiento personalizado** del progreso

### 3.2 Marco Teórico Aplicado

#### 3.2.1 Fundamentos de Educación Infantil

El proyecto se fundamenta en la **importancia crítica del período de 3-6 años** para el desarrollo cognitivo, donde se establece la conciencia fonológica. Durante esta etapa:

- **El cerebro experimenta desarrollo acelerado** en áreas del lenguaje
- **Se establecen las bases** para la lectoescritura futura
- **La interacción positiva** con tecnología puede potenciar el aprendizaje
- **El juego y la repetición** son fundamentales para la consolidación

#### 3.2.2 Aprendizaje Basado en Juegos

Se aplica la metodología de **Game-Based Learning** que utiliza:

- **Elementos lúdicos** para aumentar motivación y compromiso
- **Desafíos progresivos** adaptados a la edad
- **Recompensas inmediatas** través de retroalimentación audiovisual
- **Dinámicas de juego** que facilitan la adquisición natural de conocimientos

#### 3.2.3 Programa de Estudios SEP

El contenido se alinea con el programa oficial de la SEP para Fase 2 (2° y 3° preescolar):

- **Campo Formativo de Lenguajes**: Familiarización con letras como primer paso hacia lectoescritura
- **Saberes y Pensamiento Científico**: Reconocimiento de números y conceptos matemáticos básicos
- **Metodologías lúdicas** que respetan el ritmo natural de aprendizaje

### 3.3 Investigación de Campo

#### 3.3.1 Entrevistas con Docentes

Se realizaron **entrevistas semiestructuradas con 2 docentes de 2° grado de preescolar** del Jardín de Niños Robert Baden-Powell en Ecatepec, Estado de México.

**Principales hallazgos:**

1. **Precisión del reconocimiento de voz**
   - *"Es fundamental que la aplicación reconozca con precisión lo que los niños dicen. Si no, podrían frustrarse y perder el interés"* - Maestra Ana Martínez

2. **Facilidad de uso**
   - *"La interfaz debe ser sencilla y colorida, algo que los niños encuentren atractivo y fácil de usar por sí mismos"* - Maestra Laura Gómez

3. **Seguimiento del progreso**
   - *"Sería ideal poder ver el progreso de cada niño, identificar sus aciertos y errores, y así adaptar nuestras clases"* - Maestra Ana Martínez

#### 3.3.2 Encuestas a Tutores

Se aplicó una encuesta a **30 tutores** para evaluar la factibilidad operativa:

**Resultados destacados:**
- **95% dispuestos** a usar la aplicación propuesta
- **88% valoran positivamente** el reconocimiento de voz
- **92% consideran importante** el seguimiento del progreso
- **100% dispuestos** a permitir el uso por parte de los niños

#### 3.3.3 Análisis de Factibilidad

Se evaluaron cuatro dimensiones de factibilidad:

- **Técnica**: Viable con recursos humanos y tecnológicos disponibles
- **Operativa**: Alta aceptación por parte de usuarios finales  
- **Económica**: Costo total estimado de $504,000 MXN
- **Legal**: Cumplimiento con LFPDPPP mediante aviso de privacidad

## 4. Diseño UI/UX Especializado para Niños

### 4.1 Principios de Diseño Infantil

#### 4.1.1 Psicología del Color en Niños

El diseño de EduVoz aplica principios específicos de psicología del color para optimizar la experiencia de aprendizaje:

**Colores principales utilizados:**

- **Amarillo**: Mejora la concentración y transmite alegría y vitalidad. Ideal para elementos de éxito y motivación
- **Azul**: Promueve calma y control, estimula la creatividad. Utilizado en fondos y elementos de navegación  
- **Verde**: Representa equilibrio y armonía, mejora la capacidad de lectura. Aplicado en elementos de progreso
- **Naranja**: Mejora habilidades comunicativas y promueve interacción social

**Colores evitados:**
- **Rojo**: Puede generar agresividad en niños activos
- **Negro**: Asociado con emociones negativas
- **Uso excesivo de cualquier color**: Para evitar efectos contraproducentes

#### 4.1.2 Navegación Simplificada

Basado en el estudio de la Dra. Cynthia M. Rubin "Usability for Kids Guidelines and Best Practices", se implementaron principios específicos:

**Simplicidad en el diseño:**
- **Iconos grandes y claros** que representen las diferentes secciones
- **Estructura limpia** con espacios en blanco adecuados
- **Evitar sobrecarga** de información visual

**Interactividad adecuada:**
- **Elementos interactivos intuitivos** como botones de micrófono grandes
- **Actividades de arrastrar y soltar** cuando sea apropiado
- **Feedback dinámico** con sonidos y animaciones agradables

#### 4.1.3 Retroalimentación Inmediata

**Sistema de retroalimentación diseñado específicamente para niños:**

- **Retroalimentación instantánea**: Respuestas claras y rápidas a las acciones
- **Mensajes de felicitación** al completar tareas exitosamente
- **Indicaciones de corrección amigables** en caso de error
- **Indicadores de progreso visuales** como barras, medallas o certificados

### 4.2 Proceso de Diseño

#### 4.2.1 Wireframes y Mockups

El proceso de diseño siguió una metodología estructurada:

1. **Investigación de usuarios**: Entrevistas con docentes y encuestas a tutores
2. **Definición de personas**: Perfiles de usuarios (niños 4-5 años, tutores, docentes)
3. **Arquitectura de información**: Organización jerárquica de contenidos
4. **Wireframes de baja fidelidad**: Estructura básica de pantallas
5. **Mockups de alta fidelidad**: Diseño visual detallado

#### 4.2.2 Prototipado en Figma

Se utilizó **Figma** como herramienta principal de diseño, creando:

- **Sistema de componentes reutilizables**
- **Guía de estilos coherente**
- **Prototipos interactivos** para validación
- **Versiones responsivas** para diferentes dispositivos

**Elementos clave del diseño:**
- **Tipografía Arial**: Clara y legible para niños
- **Elementos interactivos grandes**: Fácil manipulación para manos pequeñas
- **Navegación intuitiva**: Flujo simple y directo
- **Consistencia visual**: Patrones repetibles a lo largo de la aplicación

#### 4.2.3 Validación con Usuarios

**Proceso de validación iterativo:**

1. **Pruebas con docentes**: Validación de funcionalidades pedagógicas
2. **Observaciones con niños**: Análisis de interacciones naturales
3. **Feedback de tutores**: Evaluación de utilidad y facilidad de uso
4. **Iteraciones de diseño**: Ajustes basados en observaciones

## 5. Tecnologías y Arquitectura

### 5.1 Stack Tecnológico

#### 5.1.1 Backend: Python y Flask

**Python 3.10** con **Flask 3.0.3** como framework principal:

```python
# Dependencias principales
Flask==3.0.3
Flask-Mail==0.10.0
Flask-Session==0.8.0
mysql-connector==2.2.9
numpy==1.24.4
deepspeech==0.9.3
```

**Ventajas de la selección:**
- Sintaxis clara y legible
- Amplia comunidad y documentación  
- Excelente soporte para Machine Learning
- Integración nativa con DeepSpeech
- Patrón MVC bien implementado

#### 5.1.2 Frontend: HTML5, CSS3, JavaScript

**HTML5 semántico** con elementos multimedia:
- Estructura accesible y bien organizada
- Soporte nativo para audio con Web Audio API
- Elementos semánticos para mejor SEO y accesibilidad

**CSS3 avanzado**:
- Diseño responsivo con Flexbox y Grid
- Animaciones y transiciones suaves
- Variables CSS para mantenimiento eficiente
- Diseño mobile-first

**JavaScript ES6+**:
- Programación asíncrona con async/await
- Módulos para organización del código
- Fetch API para comunicación con backend
- Manipulación eficiente del DOM

#### 5.1.3 Reconocimiento de Voz: DeepSpeech

**DeepSpeech 0.9.3** seleccionado por:

- **Tasa de error baja**: 7.2% WER (Word Error Rate)
- **Arquitectura CNN + RNN** optimizada para secuencias de audio
- **Compatibilidad multiplataforma** (Linux, Windows, macOS)
- **Código abierto** con licencia Mozilla Public License
- **Soporte para español** mediante modelos pre-entrenados

```python
# Implementación básica
import deepspeech
model = deepspeech.Model("deepspeech-0.9.3-models.pbmm")
model.enableExternalScorer("deepspeech-0.9.3-models.scorer")
```

#### 5.1.4 Base de Datos: MariaDB

**MariaDB** seleccionado por:
- Compatibilidad completa con MySQL
- Rendimiento superior en consultas complejas
- Licencia GPL (código abierto)
- Soporte para transacciones ACID
- Escalabilidad horizontal

### 5.2 Arquitectura del Sistema

#### 5.2.1 Patrón MVC

Implementación estricta del patrón Modelo-Vista-Controlador:

- **Modelo**: Clases de datos y lógica de base de datos (MariaDB)
- **Vista**: Templates HTML con Jinja2 y CSS/JavaScript
- **Controlador**: Rutas Flask con lógica de negocio y validaciones

#### 5.2.2 Componentes Principales

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Cliente Web   │    │  Servidor Flask │    │  Base de Datos  │
│   (Frontend)    │◄──►│   (Backend)     │◄──►│    MariaDB      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │ API DeepSpeech  │
                       │ (Reconocimiento)│
                       └─────────────────┘
```

#### 5.2.3 Flujo de Datos

**Proceso completo de reconocimiento de voz:**

1. **Cliente** captura audio usando Web Audio API
2. **Frontend** envía archivo WAV vía AJAX
3. **Flask** recibe audio y lo procesa con DeepSpeech  
4. **DeepSpeech** transcribe audio a texto
5. **Backend** valida respuesta contra esperada
6. **Sistema** almacena resultado en base de datos
7. **Frontend** recibe retroalimentación y actualiza UI

## 6. Implementación Técnica

### 6.1 Desarrollo del Backend

#### 6.1.1 Servidor Flask

**Configuración principal:**

```python
from flask import Flask, request, render_template, jsonify, session
from mysql.connector import Error, OperationalError
from flask_mail import Mail, Message
from flask_session import Session
import mysql.connector
import hashlib
import os

app = Flask(__name__)

# Configuración de seguridad
app.secret_key = 'tu_clave_secreta_segura'
app.config['SESSION_TYPE'] = 'filesystem'
app.config['SESSION_PERMANENT'] = False
app.config['SESSION_USE_SIGNER'] = True
app.config['SESSION_FILE_DIR'] = './flask_session'
Session(app)

# Configuración de base de datos
coneccion = mysql.connector.connect(
    host="localhost",
    user="usuario_db",
    password="password_seguro",
    database="eduvoz_db"
)
```

**Sistema de 48 endpoints organizados por funcionalidad:**

- **Autenticación**: `/inicioSesion`, `/crearCuenta`, `/recuperarContraseña`
- **Gestión de grupos**: `/crearGrupo`, `/listaAlumnos`, `/eliminarGrupo`  
- **Actividades educativas**: `/ejercicioLetras`, `/ejercicioNumeros`
- **Seguimiento**: `/progresoAlumno`, `/acabarActividades`

#### 6.1.2 Integración con DeepSpeech

```python
def process_audio(audio_file):
    """Procesa archivo de audio y retorna transcripción"""
    import deepspeech
    import numpy as np
    import wave
    
    # Configurar modelo
    model = deepspeech.Model("deepspeech-0.9.3-models.pbmm")
    model.enableExternalScorer("deepspeech-0.9.3-models.scorer")
    
    # Leer archivo WAV
    with wave.open(audio_file, 'rb') as w:
        frames = w.getnframes()
        buffer = w.readframes(frames)
        
    # Convertir y transcribir
    audio = np.frombuffer(buffer, dtype=np.int16)
    transcription = model.stt(audio)
    
    return transcription
```

#### 6.1.3 Sistema de Autenticación

**Hash SHA-256 para contraseñas:**

```python
def hash_password(password):
    """Genera hash seguro de contraseña"""
    return hashlib.sha256(password.encode()).hexdigest()

def verify_password(password, hash_stored):
    """Verifica contraseña contra hash almacenado"""
    return hash_password(password) == hash_stored
```

**Autenticación multi-rol:**

```python
@app.route('/inicioSesion', methods=['POST'])
def inicioSesion():
    correo = request.form.get('email')
    contraseña = request.form.get('contraseña')
    hash_pw = hash_password(contraseña)
    
    cursor = coneccion.cursor(dictionary=True)
    
    # Verificar en orden: Tutor -> Docente -> Administrador
    for tabla, rol in [('Tutor', 'Tutor'), ('Docente', 'Docente'), ('Administrador', 'Administrador')]:
        cursor.execute(f"SELECT * FROM {tabla} WHERE Correo{tabla}=%s AND Contraseña=%s", (correo, hash_pw))
        usuario = cursor.fetchone()
        
        if usuario:
            usuario['role'] = rol
            session['usuario'] = usuario
            return jsonify({"status": "success", "role": rol})
    
    return jsonify({"status": "error", "message": "Credenciales incorrectas"}), 401
```

### 6.2 Desarrollo del Frontend

#### 6.2.1 Interfaz Responsiva

**CSS Grid y Flexbox para layouts adaptativos:**

```css
/* Sistema de grid responsivo */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
}

/* Componentes flex para centrado */
.activity-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 15px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.activity-card:hover {
    transform: translateY(-5px);
}

/* Responsivo mobile-first */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        padding: 0.5rem;
    }
}
```

#### 6.2.2 Captura de Audio

**Implementación con Web Audio API:**

```javascript
class AudioRecorder {
    constructor() {
        this.mediaRecorder = null;
        this.audioChunks = [];
        this.isRecording = false;
    }
    
    async startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    sampleRate: 16000,
                    channelCount: 1,
                    volume: 1.0
                } 
            });
            
            this.mediaRecorder = new MediaRecorder(stream, {
                mimeType: 'audio/webm'
            });
            
            this.mediaRecorder.ondataavailable = event => {
                this.audioChunks.push(event.data);
            };
            
            this.mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(this.audioChunks, { type: 'audio/wav' });
                await this.sendAudioToServer(audioBlob);
                this.audioChunks = [];
            };
            
            this.mediaRecorder.start();
            this.isRecording = true;
            this.updateUI('recording');
            
        } catch (error) {
            console.error('Error al acceder al micrófono:', error);
            this.showError('No se pudo acceder al micrófono');
        }
    }
    
    stopRecording() {
        if (this.mediaRecorder && this.isRecording) {
            this.mediaRecorder.stop();
            this.isRecording = false;
            this.updateUI('processing');
        }
    }
    
    async sendAudioToServer(audioBlob) {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.wav');
        formData.append('expected', this.expectedAnswer);
        
        try {
            const response = await fetch('/process_audio', {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            this.handleServerResponse(result);
            
        } catch (error) {
            console.error('Error enviando audio:', error);
            this.showError('Error de conexión al servidor');
        }
    }
}
```

#### 6.2.3 Comunicación AJAX

**Manejo de respuestas del servidor:**

```javascript
handleServerResponse(result) {
    if (result.success) {
        this.showFeedback(result.correct, result.transcription, result.expected);
        this.updateScore(result.correct);
        this.playFeedbackSound(result.correct);
    } else {
        this.showError(result.message || 'Error procesando audio');
    }
}

showFeedback(isCorrect, transcribed, expected) {
    const feedbackElement = document.getElementById('feedback');
    const messageElement = document.getElementById('feedback-message');
    
    if (isCorrect) {
        feedbackElement.className = 'feedback success';
        messageElement.textContent = '¡Excelente! Lo pronunciaste perfecto 🎉';
        this.showSuccessAnimation();
    } else {
        feedbackElement.className = 'feedback error';
        messageElement.innerHTML = `
            <p>Casi lo tienes, intenta de nuevo 🔄</p>
            <small>Dijiste: "${transcribed}" | Esperado: "${expected}"</small>
        `;
        this.showEncouragementAnimation();
    }
    
    // Auto-hide después de 4 segundos
    setTimeout(() => {
        feedbackElement.className = 'feedback';
        messageElement.textContent = '';
    }, 4000);
}
```

### 6.3 Base de Datos

#### 6.3.1 Esquema Relacional

**Diseño de 7 tablas principales con integridad referencial:**

```sql
-- Tabla Administrador
CREATE TABLE Administrador (
    CorreoAdministrador VARCHAR(100) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla Docente
CREATE TABLE Docente (
    CorreoDocente VARCHAR(100) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    NoGrupos INT DEFAULT 0,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Activo BOOLEAN DEFAULT TRUE
);

-- Tabla Grupo
CREATE TABLE Grupo (
    IdGrupo INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Codigo VARCHAR(5) UNIQUE NOT NULL,
    NoAlumnos INT DEFAULT 0,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CorreoDocente VARCHAR(100) NOT NULL,
    FOREIGN KEY (CorreoDocente) REFERENCES Docente(CorreoDocente) ON DELETE CASCADE,
    INDEX idx_codigo (Codigo)
);

-- Tabla Tutor
CREATE TABLE Tutor (
    CorreoTutor VARCHAR(100) PRIMARY KEY,
    Contraseña VARCHAR(255) NOT NULL,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UltimaActividad TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabla Alumno
CREATE TABLE Alumno (
    IdAlumno INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(100) NOT NULL,
    Foto VARCHAR(255) DEFAULT 'static/img/alumnos/usuario.png',
    AciertosNumeros INT DEFAULT 0,
    AciertosLetras INT DEFAULT 0,
    FechaAciertosNumeros TIMESTAMP NULL,
    FechaAciertosLetras TIMESTAMP NULL,
    IdGrupo INT NULL,
    CorreoTutor VARCHAR(100) NOT NULL,
    FechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (IdGrupo) REFERENCES Grupo(IdGrupo) ON DELETE SET NULL,
    FOREIGN KEY (CorreoTutor) REFERENCES Tutor(CorreoTutor) ON DELETE CASCADE,
    INDEX idx_grupo (IdGrupo),
    INDEX idx_tutor (CorreoTutor)
);

-- Tabla Ejercicio
CREATE TABLE Ejercicio (
    IdEjercicio INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Valores TEXT NOT NULL,
    FechaCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CorreoDocente VARCHAR(100) NOT NULL,
    Activo BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (CorreoDocente) REFERENCES Docente(CorreoDocente) ON DELETE CASCADE,
    INDEX idx_docente (CorreoDocente)
);

-- Tabla Resultado
CREATE TABLE Resultado (
    IdResultado INT AUTO_INCREMENT PRIMARY KEY,
    IdAlumno INT NOT NULL,
    IdEjercicio INT NOT NULL,
    Aciertos INT DEFAULT 0,
    Errores INT DEFAULT 0,
    TiempoTranscurrido INT DEFAULT 0,
    Fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (IdAlumno) REFERENCES Alumno(IdAlumno) ON DELETE CASCADE,
    FOREIGN KEY (IdEjercicio) REFERENCES Ejercicio(IdEjercicio) ON DELETE CASCADE,
    INDEX idx_alumno_fecha (IdAlumno, Fecha),
    INDEX idx_ejercicio (IdEjercicio)
);
```

#### 6.3.2 Integridad Referencial

**Relaciones implementadas:**
- **Docente → Grupo**: 1:1 (cada docente un grupo)
- **Grupo → Alumno**: 1:N (un grupo muchos alumnos)
- **Tutor → Alumno**: 1:1 (un tutor un alumno)
- **Docente → Ejercicio**: 1:N (un docente muchos ejercicios)
- **Alumno → Resultado**: 1:N (un alumno muchos resultados)
- **Ejercicio → Resultado**: 1:N (un ejercicio muchos resultados)

## 7. Pruebas y Validación

### 7.1 Pruebas Técnicas

**Pruebas unitarias implementadas:**
- Creación de cuentas de usuario
- Autenticación multi-rol
- Procesamiento de reconocimiento de voz
- Almacenamiento de resultados
- Validación de datos de entrada

### 7.2 Validación con Usuarios

**Encuesta con 30 tutores** arrojó resultados positivos:
- **95% dispuestos** a usar la aplicación
- **88% valoran** el reconocimiento de voz  
- **92% consideran importante** el seguimiento del progreso
- **100% permitirían** su uso a los niños

### 7.3 Métricas de Usabilidad

**Resultados de validación con docentes:**
- Alineación con objetivos pedagógicos ✓
- Interfaz apropiada para la edad objetivo ✓  
- Utilidad del sistema de seguimiento ✓
- Facilidad de gestión de grupos ✓

## 8. Despliegue y Configuración

### 8.1 Infraestructura en Google Cloud

**Configuración de producción:**

```bash
# Crear instancia Compute Engine
gcloud compute instances create eduvoz-server \
    --zone=us-central1-a \
    --machine-type=e2-medium \
    --subnet=default \
    --image-family=ubuntu-2204-lts \
    --image-project=ubuntu-os-cloud \
    --boot-disk-size=20GB \
    --tags=http-server,https-server

# Configurar firewall
gcloud compute firewall-rules create allow-http --allow tcp:80
gcloud compute firewall-rules create allow-https --allow tcp:443
```

### 8.2 Configuración de Producción

**Nginx como proxy reverso:**

```nginx
server {
    listen 80;
    server_name eduvoz.ejemplo.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name eduvoz.ejemplo.com;
    
    ssl_certificate /etc/letsencrypt/live/eduvoz.ejemplo.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/eduvoz.ejemplo.com/privkey.pem;
    
    # Configuraciones SSL modernas
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512;
    ssl_prefer_server_ciphers off;
    
    location / {
        proxy_pass http://127.0.0.1:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Timeouts para audio processing
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }
    
    location /static {
        alias /home/eduvoz/app/static;
        expires 1d;
        add_header Cache-Control "public, immutable";
    }
}
```

**Gunicorn para WSGI:**

```bash
# Archivo gunicorn.conf.py
bind = "127.0.0.1:5000"
workers = 4
worker_class = "sync"
timeout = 60
keepalive = 5
max_requests = 1000
max_requests_jitter = 100
preload_app = True
```

### 8.3 Instalación Local

**Requisitos del sistema:**
- Python 3.8 o superior
- MariaDB/MySQL 8.0+
- 4GB RAM mínimo  
- 10GB espacio en disco
- Micrófono funcional

**Pasos de instalación:**

```bash
# 1. Clonar repositorio
git clone https://github.com/Czamudioo121/EduVoz.git
cd EduVoz

# 2. Crear entorno virtual
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# 3. Instalar dependencias
pip install -r requirements.txt

# 4. Configurar base de datos
mysql -u root -p
CREATE DATABASE eduvoz_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
exit
mysql -u root -p eduvoz_db < tt.sql

# 5. Configurar variables de entorno
cp .env.example .env
# Editar .env con configuraciones locales

# 6. Ejecutar aplicación
python app.py
```

**Configuración de variables (.env):**

```bash
# Base de datos
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=eduvoz_db

# Flask
SECRET_KEY=tu_clave_secreta_muy_segura
FLASK_ENV=development

# DeepSpeech
DEEPSPEECH_MODEL_PATH=models/deepspeech-0.9.3-models.pbmm
DEEPSPEECH_SCORER_PATH=models/deepspeech-0.9.3-models.scorer

# Directorios
UPLOAD_FOLDER=static/img/usuarios
MAX_CONTENT_LENGTH=16777216
```

---

## Conclusiones

EduVoz representa una solución innovadora que integra **tecnologías avanzadas de reconocimiento de voz con principios sólidos de educación infantil**. El proyecto surge de una necesidad real identificada durante la pandemia COVID-19 y se fundamenta en investigación exhaustiva tanto técnica como pedagógica.

**Aspectos destacados del proyecto:**

- **Investigación fundamentada**: Basado en entrevistas con docentes, encuestas a tutores y análisis del estado del arte
- **Diseño centrado en el usuario**: UI/UX específicamente diseñado para niños de 4-5 años aplicando psicología del color y principios de usabilidad infantil
- **Arquitectura robusta**: Stack tecnológico moderno con Python/Flask, DeepSpeech y MariaDB
- **Validación exitosa**: 95% de aceptación por parte de tutores y validación positiva con docentes
- **Alineación curricular**: Integrado con el programa de estudios de la SEP para preescolar

El proyecto demuestra cómo la **combinación de investigación rigurosa, diseño centrado en el usuario y tecnologías apropiadas** puede crear herramientas educativas efectivas que aborden necesidades reales del sistema educativo mexicano.

---

*Desarrollado por: Villalobos Sánchez Ezequiel y Zamudio Onofre César Osvaldo*  
*Instituto Politécnico Nacional - Escuela Superior de Cómputo*  
*Repositorio: [https://github.com/Czamudioo121/EduVoz](https://github.com/Czamudioo121/EduVoz)*   
