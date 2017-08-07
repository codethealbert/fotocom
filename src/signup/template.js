var yo = require('yo-yo');

module.exports = yo`<div class="container">
			<div class="row">
				<div class="col s10 push-s1">
					<div class="row">
						<div class="col m5 hide-on-small-only">
							<img class="iphone" src="iphone.png" />
						</div>
						<div class="col s12 m7">
							<div class="row">
								<div class="singup-box">
									<h1 class="photos">Mis Fotos</h1>
									<form class="singup-form">
										<h2>Registrate para ver fotos de tus amigos</h2>
										<div class="section">
											<a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
											<a class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
										</div>
										<div class="divider"></div>
										<div class="section">
											<input type="email" name="email" placeholder="Correo electrónico">
											<input type="text" name="name" placeholder="Nombre completo">
											<input type="text" name="username" placeholder="Nombre de usuario">
											<input type="password" name="password" placeholder="Contraseña">
											<button class="btn waves-effect waves-light btn-singup" type="submit">Regístrate</button>
										</div>
									</form>
								</div>
							</div>
							<div class="row">
								<div class="login-box">
									¿Tienes una cuenta? <a href="/singin">Entrar</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>`