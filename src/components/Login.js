import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import loginedited from "../patientImages/loginedited.jpg";
import { useEffect } from "react";

export default function Login() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });

        axios.post("http://localhost:8050/auth/login", {
            email: data.get("email"),
            password: data.get("password"),
        }).then(function (res) {
            if (res.status === 200) {
                localStorage.setItem('role', res.data.role);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                window.location.href = '/';
            } else {
                alert(res.data.message);
            }
        })
            .catch(function (err) {
                alert(err.response.data.message);
            });
    };

    useEffect(() => {
        if (localStorage.getItem('role') === 'admin') {
            navigate('/admin');
        } else if (localStorage.getItem('role') === 'user') {
            navigate('/');
        }
    }, []);

    return (
        <div style={{
            backgroundImage: `url(${loginedited})`,
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            maxWidth: '100%',
        }}>
             <div style={{
                position:"absolute",
                left: "600px",
                top:"200px",
                backdropFilter: "blur(10px)",
                paddingTop: "20px",  // Add padding to move the form down
                margin: "auto",
                maxWidth: "500px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "2px solid #fff",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
    }}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link to="/register" variant="body2" style={{ margin: "0 70px", color: "yellow" }}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                    <br />
                                    <Link to="/doctorLogin" variant="body2" style={{ color: "yellow" }}>
                                        {"Doctor Login"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </div>
        </div>
    );
}
