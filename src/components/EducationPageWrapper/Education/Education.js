import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Container } from '@/Common';

const Education = ({
  title,
  location,
  startDate,
  endDate,
  description,
  additionalHeaders,
  credential,
}) => {
  return (
    <motion.li className="list-none">
      <Container>
        <div className="flex gap-4">
          {/* Position */}
          <div className="relative text-2xl font-semibold">{title}</div>
        </div>
        <div className="flex gap-4 pb-4">
          <div>
            <div className="font-semibold">
              {/* Location */}
              {location}&nbsp;&#8226;&nbsp;
              {/* Date */}
              {startDate.year === endDate.year &&
              startDate.month === startDate.month ? (
                <>
                  {new Date(startDate.year, startDate.month).toLocaleString(
                    'default',
                    {
                      month: 'short',
                      year: 'numeric',
                    }
                  )}
                </>
              ) : (
                <>
                  {new Date(startDate.year, startDate.month).toLocaleString(
                    'default',
                    {
                      month: 'short',
                      year: 'numeric',
                    }
                  )}
                  &nbsp;-&nbsp;
                  {new Date(endDate.year, endDate.month).toLocaleString(
                    'default',
                    {
                      month: 'short',
                      year: 'numeric',
                    }
                  )}
                </>
              )}
              {/* Other Headers */}
              {additionalHeaders?.length > 0 && (
                <>&nbsp;&#8226;&nbsp;{additionalHeaders?.join(' • ')}</>
              )}
            </div>
            {/* Description */}
            <div className="text-l mt-2 whitespace-pre-line">{description}</div>
            {/* Links */}
            {credential && (
              <div className="mt-2">
                <a
                  href={credential.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Show Credential
                </a>
              </div>
            )}
          </div>
        </div>
      </Container>
    </motion.li>
  );
};

Education.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  endDate: PropTypes.shape({
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  additionalHeaders: PropTypes.arrayOf(PropTypes.string),
  credential: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }),
};

export default Education;
