import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.cpf === JSON.parse(userToken).cpf
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (cpf, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.cpf === cpf);

    if (hasUser?.length) {
      if (hasUser[0].cpf === cpf && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ cpf, token }));
        setUser({ cpf, password });
        return;
      } else {
        return "CPF ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const signup = (cpf, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.cpf === cpf);

    if (hasUser?.length) {
      return "Já tem uma conta com esse CPF";
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, { cpf, password }];
    } else {
      newUser = [{ cpf, password }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
