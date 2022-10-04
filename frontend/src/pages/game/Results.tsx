import {
  Button,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper,
  Box,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useGame } from '../../hooks/useGameState';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export const Results = () => {
  const { results } = useGame();

  console.log(results);

  const graphData = results.map((r) => {
    const totalTime =
      r.events[r.events.length - 1].timestamp - r.events[0].timestamp;

    const accuracy =
      r.events.filter((e) => e.targetId).length / r.events.length;

    const totalDistanceTravelled = r.events.reduce((acc, curr) => {
      return acc + Math.sqrt(Math.pow(curr.xPos, 2) + Math.pow(curr.yPos, 2));
    }, 0);

    return {
      level: r.level,
      totalTime,
      accuracy,
      totalDistanceTravelled,
      avgMovementTime: totalDistanceTravelled / totalTime,
    };
  });

  const theme = useTheme();

  const opts: ApexOptions = {};

  return (
    <Container sx={{ my: 4, flexGrow: 1 }}>
      <Stack spacing={2}>
        <Typography variant='h4'>Results</Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant='h6'>Total Time</Typography>
                <Paper sx={{ pr: 2 }}>
                  <Chart
                    options={{
                      chart: {
                        zoom: {
                          autoScaleYaxis: true,
                          enabled: false,
                        },
                        toolbar: {
                          tools: {
                            download: false,
                            zoom: false,
                            reset: false,
                          },
                        },
                      },
                      xaxis: {
                        tickAmount: 3,
                      },
                      yaxis: {
                        tickAmount: 5,
                        min: Math.max(
                          Math.min(...graphData.map((g) => g.totalTime)) - 2000,
                          0
                        ),
                        labels: {
                          formatter: (value) => `${(value / 1000).toFixed(1)}s`,
                        },
                      },
                    }}
                    series={
                      [
                        {
                          name: 'Total Time',
                          data: graphData.map((d) => [d.level, d.totalTime]),
                        },
                      ] as any
                    }
                    type='scatter'
                  />
                </Paper>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Level</TableCell>
                        <TableCell>Total Time</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {graphData.map((d, i) => (
                        <TableRow key={i}>
                          <TableCell>{d.level + 1}</TableCell>
                          <TableCell>{`${d.totalTime / 1000}s`}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant='h6'>Accuracy</Typography>
                <Paper sx={{ pr: 2 }}>
                  <Chart
                    options={{
                      chart: {
                        zoom: {
                          autoScaleYaxis: true,
                          enabled: false,
                        },
                        toolbar: {
                          tools: {
                            download: false,
                            zoom: false,
                            reset: false,
                          },
                        },
                      },
                      xaxis: {
                        tickAmount: 3,
                      },
                      yaxis: {
                        tickAmount: 5,
                        max: 1,
                        min: 0,
                        labels: {
                          formatter: (value) => `${(value * 100).toFixed(0)}%`,
                        },
                      },
                    }}
                    series={
                      [
                        {
                          name: 'Accuracy',
                          data: graphData.map((d) => [d.level, d.accuracy]),
                        },
                      ] as any
                    }
                    type='scatter'
                  />
                </Paper>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Level</TableCell>
                        <TableCell>Accuracy</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {graphData.map((d, i) => (
                        <TableRow key={i}>
                          <TableCell>{d.level + 1}</TableCell>
                          <TableCell>{`${(d.accuracy * 100).toFixed(
                            1
                          )}%`}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={2}>
                <Typography variant='h6'>Speed</Typography>
                <Paper sx={{ pr: 2 }}>
                  <Chart
                    options={{
                      chart: {
                        zoom: {
                          autoScaleYaxis: true,
                          enabled: false,
                        },
                        toolbar: {
                          tools: {
                            download: false,
                            zoom: false,
                            reset: false,
                          },
                        },
                      },
                      xaxis: {
                        tickAmount: 3,
                      },
                      yaxis: {
                        tickAmount: 5,
                        labels: {
                          formatter: (value) => `${value.toFixed(1)}`,
                        },
                      },
                    }}
                    series={
                      [
                        {
                          name: 'Speed',
                          data: graphData.map((d) => [
                            d.level,
                            d.avgMovementTime,
                          ]),
                        },
                      ] as any
                    }
                    type='scatter'
                  />
                </Paper>
                <Paper>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Level</TableCell>
                        <TableCell>Speed</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {graphData.map((d, i) => (
                        <TableRow key={i}>
                          <TableCell>{d.level + 1}</TableCell>
                          <TableCell>{`${d.avgMovementTime.toFixed(
                            3
                          )}`}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Button
          variant='contained'
          size='large'
          component={Link}
          to='/reflections'
        >
          Go to Reflections
        </Button>
      </Stack>
    </Container>
  );
};
