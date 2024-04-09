 Feature: 01 - Crowdar Academy 2023 - Login
#   @login
#   Scenario: Login como admin
#     Given Me logueo como admin correctamente
  
#   @login
#   Scenario: Login como usuario normal
#     Given Me logueo como usuario correctamente
  
#   @loginExitoso
#   Scenario Outline: Login usuario - Escenario Outline 
#     Given Navego al sitio automationtesting
#     When Me logueo como usuario con user '<user>' y pass '<pass>' 
#     Then Valido saludo de bienvenida en el Título

#         Examples:
#           | user                                            |   pass                |
#           | academyCypress_usuarioNormal@crowdaronline.com  |   Crowdar.2023!       |

  # @logeoExitosoUsuarioPersonal
  # Scenario: Registro usuario personal 
  #  Given Navego al sitio automationtesting
  #  When Me logeo en la pagina con usuario personal
  #  Then Valido saludo de bienvenida en el Título
  
  # @deslogeoExitosoUsuarioPersonal
  # Scenario: Registro usuario personal 
  #   Given Navego al sitio automationtesting
  #   When Me logueo como usuario con user '<user>' y pass '<pass>' 
  #   Then Valido saludo de bienvenida en el Título
  #   And Me deslogeo de la pagina
  #   Then Visualizo modal de registro

  #   Examples:
  #     | user                            |   pass                |
  #     | quimey.tabuyo@crowdaronline.com |   macgyber132         |

  # @logeoFalidoUsuarioPersonal
  # Scenario: Registro usuario personal 
  #   Given Navego al sitio automationtesting
  #   When Me logeo en la pagina con usuario personal con contraseña erronea
  #   Then Valido falla al iniciar sesion
  
  @registrarUsuarioExistente
  Scenario: Registro usuario personal 
    Given Navego al sitio automationtesting
    When Me registro en la pagina con usuario existente
    Then El usuario ya existe
