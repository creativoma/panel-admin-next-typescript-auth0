import { useUser } from "@auth0/nextjs-auth0/client";
import Layout from "../components/layout";

const About = () => {
  const { user, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h2 className="mb-6 text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
        About this project
      </h2>
      <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
        Lorem ipsum dolor sit amet consectetur adipiscing, elit pulvinar nec
        torquent ullamcorper, commodo turpis tristique nunc consequat. Cubilia
        aliquam tempor penatibus felis aliquet accumsan pellentesque nam, proin
        aenean neque libero enim tortor feugiat, montes litora egestas ad per
        nisl dictum. Leo lacus hac sodales nulla morbi viverra eget scelerisque
        cum ad neque, litora non dis rutrum class cubilia vitae aptent augue.
      </p>
      <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
        Fusce mus at parturient aliquam leo posuere, est natoque sollicitudin
        sem. Malesuada pharetra varius nisi taciti nostra eget eleifend morbi
        primis purus iaculis suspendisse ac porttitor, elementum vehicula rutrum
        congue tortor dictum vitae felis maecenas aenean nibh luctus. Suscipit
        curae accumsan mollis himenaeos ut consequat condimentum scelerisque,
        cursus semper nec eu taciti eleifend sollicitudin fusce habitasse,
        nostra fermentum dis sed nulla magnis ullamcorper. Vehicula taciti netus
        magna cursus etiam mauris facilisis, a posuere primis tempor neque
        pulvinar, potenti commodo mollis nunc facilisi mus.
      </p>
      <p className="text-lg mt-1 text-gray-600 dark:text-gray-400 mb-5">
        Semper risus turpis felis mi sem porta fermentum, nisl accumsan nec
        vehicula iaculis fusce purus et, ultricies gravida ante fames arcu
        vivamus. Donec rhoncus pretium ultricies inceptos tempus, vivamus per
        auctor convallis fames, feugiat natoque iaculis neque. Tempor rutrum
        nisi dis augue justo ridiculus sodales ut condimentum natoque,
        sollicitudin vulputate luctus nostra fames purus commodo habitant
        inceptos.
      </p>
    </Layout>
  );
};

export default About;
